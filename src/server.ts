import  Express  from 'express';
import EquipamentoController from './controllers/EquipamentoController';
import OrdemServicoController from './controllers/OrdemServicoController';

const app = Express();
app.use(Express.json());
const PORT = 8000;
const VERSION = '/api/v1';

app.get(`${VERSION}/`, ( request , response)=>{
  return response.send({message:'Atividade API Gateway - Diego Tiburcio dos Santos'});
});

app.post(`${VERSION}/os` , OrdemServicoController.createOrdemServico);
app.get(`${VERSION}/os/:numero` , OrdemServicoController.listaOrdemServico);
app.get(`${VERSION}/os` , OrdemServicoController.listaOrdemServico);
app.post(`${VERSION}/os/:numero/equipamento` , EquipamentoController.createEquipamento);
app.get(`${VERSION}/os/:numero/equipamento/:indice` , EquipamentoController.listaEquipamentos);
app.get(`${VERSION}/os/:numero/equipamento` , EquipamentoController.listaEquipamentos);
// app.get(`${VERSION}/os/equipamento` , EquipamentoController.listaEquipamentos);

app.listen(PORT, () =>{
  console.log(`Server is running ${PORT}`);
});
