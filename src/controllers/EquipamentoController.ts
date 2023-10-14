import { Request , Response } from 'express';
import { prisma } from '../database';


export default {

  async createEquipamento( request: Request , response: Response ) {
    try {

      const { indice , descricao , problema } = request.body;
      const { numero  } = request.params;

      console.log(numero , 'numero update');


      const equipamentoExist = await prisma.ordemServico.findFirst({ where: { numero : Number(numero) } });

      if(!equipamentoExist){
        return response.json({
          error : true,
          message: 'Erro: Número da Ordem do serviço inexistente!'
        });
      }

      const equipamento = await prisma.equipamento.create({
        data : {
          numero : Number(numero),
          indice,
          descricao,
          problema
        }
      });

      return response.json({
        error: false,
        message: 'Sucesso: Equipamento cadastrado com sucesso!',
        equipamento
      });


    } catch (error) {
      return response.json({ message: error.message });
    }
  },

  async listaEquipamentos( request: Request , response: Response ) {

    try {

      const { numero , indice } = request.params;
      const { descricao  } = request.query;

      console.log(numero , indice , descricao);

      let whereClause = {};
      if(indice && descricao && numero ){ 
        whereClause = { numero : Number(numero) , indice : indice , descricao : String(descricao) };
      } else if(indice && numero ){ 
        whereClause = { numero : Number(numero) , indice : indice };
      } else if( descricao && numero ){ 
        whereClause = { numero : Number(numero) , descricao : String(descricao) };
      } else if( numero ){
        whereClause = { numero : Number(numero) };
      }
      
      console.log(whereClause);
      let listaEquipamentos = null;
      if(whereClause){
        listaEquipamentos = await prisma.equipamento.findMany({ where: whereClause });
      }else{
        listaEquipamentos = await prisma.equipamento.findMany();
      }      

      if(!listaEquipamentos){
        return response.json({
          error : true,
          message: 'Erro: Não existe nenhum equipamento para a OS informada!'
        });
      }

      return response.json({
        listaEquipamentos
      });


    } catch (error) {
      return response.json({ message: error.message });
    }
  }


};