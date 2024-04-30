import {Funcionario} from "./funcionario.interface";
import {Status} from "./status.enum";

export interface RelatorioDespesa {
  id: string;
  funcionarioId: string;
  funcionario: Funcionario;
  data: string;
  valor: number;
  arquivoPdf: string;
  status: Status;
}
