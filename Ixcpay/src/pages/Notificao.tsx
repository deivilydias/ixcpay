import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Notificao.module.css";
const Notificao: FunctionComponent = () => {
  const navigate = useNavigate();

  const onEllipse4Click = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);

  const onArrowIconClick = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);

  return (
    <div className={styles.notificao}>
      <div className={styles.notificaoChild} />
      <div className={styles.notificaoItem} />
      <div className={styles.notificaoItem} />
      <div className={styles.rectangleDiv} />
      <div className={styles.notificaoChild1} />
      <div className={styles.notificaoChild2} />
      <div className={styles.notificaoChild3} />
      <div className={styles.notificaoChild4} />
      <div className={styles.notificaoChild5} />
      <div className={styles.notificaoChild6} />
      <div className={styles.notificaoChild7} />
      <div className={styles.notificaoChild8} />
      <b
        className={styles.pagamentosRecebidosCom}
      >{`Pagamentos recebidos com sucesso `}</b>
      <b className={styles.b}>81%</b>
      <b className={styles.projetosEmAndamento}>Projetos em andamento</b>
      <b className={styles.b1}>15</b>
      <b className={styles.emNegociao}>Em negociação</b>
      <b className={styles.b2}>5</b>
      <div className={styles.notificaoChild9} />
      <div className={styles.notificaoChild10} />
      <div className={styles.notificaoChild11} />
      <div className={styles.notificaoChild12} />
      <div className={styles.notificaoChild13} />
      <div className={styles.notificaoChild14} />
      <div className={styles.notificaoChild15} />
      <div className={styles.notificaoChild16} />
      <div className={styles.notificaoChild17} />
      <div className={styles.notificaoChild18} />
      <b className={styles.pagamentosRecebidos}>Pagamentos recebidos</b>
      <b className={styles.estatisticasDeRecebimento}>
        Estatisticas de recebimento
      </b>
      <b className={styles.insights}>Insights</b>
      <b className={styles.principaisFontes}>Principais fontes</b>
      <div className={styles.projetoA}>55% projeto A</div>
      <div className={styles.projetoB}>35% projeto B</div>
      <div className={styles.projetoC}>10% projeto C</div>
      <div className={styles.projetoD}>10% projeto D</div>
      <b className={styles.b3}>39%</b>
      <div
        className={styles.clientesQuePagam}
      >{`Clientes que pagam em dinheito estão atrasando `}</div>
      <div className={styles.r1525010CartoContainer}>
        <p className={styles.deivilyDias}>
          <b>R$ 15.250,10</b>
        </p>
        <p className={styles.cartoDeCrdito}>cartão de crédito</p>
      </div>
      <div className={styles.r928012CartoContainer}>
        <p className={styles.deivilyDias}>
          <b>R$ 9.280,12</b>
        </p>
        <p className={styles.cartoDeCrdito}>cartão de débito</p>
      </div>
      <div className={styles.r1623090BoletoContainer}>
        <p className={styles.deivilyDias}>
          <b>R$ 16.230,90</b>
        </p>
        <p className={styles.cartoDeCrdito}>Boleto bancário</p>
      </div>
      <div className={styles.r837000DinheiroContainer}>
        <p className={styles.deivilyDias}>
          <b>R$ 8.370,00</b>
        </p>
        <p className={styles.cartoDeCrdito}>Dinheiro</p>
      </div>
      <b className={styles.b4}>{`14% `}</b>
      <div className={styles.melhorDoQue}>melhor do que no último mês</div>
      <div className={styles.semana}>Semana</div>
      <div className={styles.ms}>Mês</div>
      <div className={styles.trimestre}>Trimestre</div>
      <div className={styles.ano}>Ano</div>
      <div className={styles.ellipseDiv} />
      <img className={styles.rectangleIcon} alt="" src="/undefined12.png" />
      <img className={styles.graphsIcon} alt="" src="/undefined13.png" />
      <div className={styles.bg} />
      <img className={styles.pathIcon} alt="" src="/undefined14.png" />
      <div className={styles.bg1} />
      <img className={styles.pathIcon1} alt="" src="/undefined15.png" />
      <div className={styles.bg2} />
      <img className={styles.pathIcon2} alt="" src="/undefined15.png" />
      <div className={styles.bg3} />
      <img className={styles.pathIcon3} alt="" src="/undefined16.png" />
      <b className={styles.dashboard}>Dashboard</b>
      <b className={styles.clientes}>Clientes</b>
      <img className={styles.ellipseIcon} alt="" src="/undefined17.png" />
      <img className={styles.notificaoChild19} alt="" src="/undefined18.png" />
      <div className={styles.notificaoChild20} />
      <div className={styles.notificaoChild21} />
      <b className={styles.deivilyDiasIxcpayContainer}>
        <p className={styles.deivilyDias}>Deivily Dias</p>
        <p className={styles.deivilyDias}>Ixcpay</p>
      </b>
      <div className={styles.notificaoChild22} />
      <img
        className={styles.elmgeneraloverlayIcon}
        alt=""
        src="/undefined19.png"
      />
      <div className={styles.notificaoChild23} />
      <div className={styles.notificaoChild24} />
      <div className={styles.notificaoChild25} />
      <div className={styles.notificaoChild26} />
      <b className={styles.notificao1}>{`Notificação `}</b>
      <div className={styles.gabrielaPagou1Container}>
        <p className={styles.deivilyDias}>Gabriela pagou</p>
        <p className={styles.deivilyDias}>1 dia antes</p>
      </div>
      <img className={styles.notificaoChild27} alt="" src="/undefined20.png" />
      <div className={styles.carlosPagamentoEmContainer}>
        <p className={styles.deivilyDias}>{`Carlos pagamento `}</p>
        <p className={styles.deivilyDias}>em dinheiro</p>
      </div>
      <img className={styles.notificaoChild28} alt="" src="/undefined21.png" />
      <div className={styles.anaEstCom}>Ana está com pagamento atrasado</div>
      <img className={styles.notificaoChild29} alt="" src="/undefined22.png" />
      <div className={styles.notificaoChild30} onClick={onEllipse4Click} />
      <img
        className={styles.arrowIcon}
        alt=""
        src="/undefined23.png"
        onClick={onArrowIconClick}
      />
    </div>
  );
};

export default Notificao;
