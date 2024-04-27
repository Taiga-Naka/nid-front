import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Router, RouterStateSnapshot} from "@angular/router";
import {jwtDecode, JwtPayload} from "jwt-decode";
import {AuthenticatorServices} from "../services/auth.service";

@Injectable({ providedIn: "root" })
export class AuthGuard {
  constructor(
    private router: Router,
    public authService: AuthenticatorServices,
    // private userService: UserService,
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const currentUser = JSON.parse(localStorage.getItem("currentUser") || "{}");

    if (currentUser) {
      if (currentUser.message != undefined) {
        this.authService.logout();
        location.reload();
        this.router.navigate(["/inicio"]);
        return false;
      }

      const jwt = currentUser.token;
      if (jwt) {
        const tokenPayload: JwtPayload = jwtDecode(jwt);

        //verifica se o token está expirado
        const expired = tokenPayload?.exp && tokenPayload.exp < Date.now() / 1000;
        if (expired) {
          this.authService.logout();
          location.reload();
          this.router.navigate(["/"]);
          return false;
        }
      }
    }

    // Usuário não está autenticado, redirecione para a página de login
    this.router.navigate(["/"], {
      queryParams: { returnUrl: state.url },
    });
    return false;
  }
}
