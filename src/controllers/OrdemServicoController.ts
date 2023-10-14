import { Request , Response } from 'express';
import { prisma } from '../database';

export default {

  async createOrdemServico( request: Request , response: Response ) {
    try {

      const { numero , descricao } = request.body;
      const ordemServicoExist = await prisma.ordemServico.findUnique({ where: { numero } });

      if(ordemServicoExist){
        return response.json({
          error : true,
          message: 'Erro: Número da Ordem do serviço já informada!'
        });
      }

      const ordemServico = await prisma.ordemServico.create({
        data : {
          numero,
          descricao
        }
      });

      return response.json({
        error: false,
        message: 'Sucesso: OS cadastrada com sucesso!',
        ordemServico
      });


    } catch (error) {
      return response.json({ message: error.message });
    }
  },

  async listaOrdemServico( request: Request , response: Response ) {

    try {

      const { numero  } = request.params;
      let listaOrdemServico = null;

      console.log(numero , 'teste numero lista ordeservico');

      if(numero == 'equipamento'){
        // Efetua o filtro dos equipamentos que possuem determinada descrição
        const { descricao  } = request.query;
        listaOrdemServico = await prisma.equipamento.findMany({ where: { descricao : { contains: String(descricao) } } });

      }else{

        if(numero){
          listaOrdemServico = await prisma.ordemServico.findMany({ where: { numero : Number(numero) } });
        }else{
          listaOrdemServico = await prisma.ordemServico.findMany();
        }  

      }          

      if(!listaOrdemServico){
        return response.json({
          error : true,
          message: 'Erro: Não existe nenhuma OS informada!'
        });
      }

      return response.json({
        listaOrdemServico
      });

    } catch (error) {
      return response.json({ message: error.message });
    }
  }


};