import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Dashboard.module.css";
const Dashboard: FunctionComponent = () => {
  const navigate = useNavigate();

  const onClientesTextClick = useCallback(() => {
    navigate("/pagamentos");
  }, [navigate]);

  const onEllipseIcon1Click = useCallback(() => {
    navigate("/notificao");
  }, [navigate]);

  return (
    <div className={styles.dashboard}>
      <div className={styles.dashboardChild} />
      <div className={styles.dashboardItem} />
      <div className={styles.dashboardItem} />
      <div className={styles.rectangleDiv} />
      <div className={styles.dashboardChild1} />
      <div className={styles.dashboardChild2} />
      <div className={styles.dashboardChild3} />
      <div className={styles.dashboardChild4} />
      <div className={styles.dashboardChild5} />
      <div className={styles.dashboardChild6} />
      <div className={styles.dashboardChild7} />
      <div className={styles.dashboardChild8} />
      <b
        className={styles.pagamentosRecebidosCom}
      >{`Pagamentos recebidos com sucesso `}</b>
      <b className={styles.b}>81%</b>
      <b className={styles.projetosEmAndamento}>Projetos em andamento</b>
      <b className={styles.b1}>15</b>
      <b className={styles.emNegociao}>Em negociação</b>
      <b className={styles.b2}>5</b>
      <div className={styles.dashboardChild9} />
      <div className={styles.dashboardChild10} />
      <div className={styles.dashboardChild11} />
      <div className={styles.dashboardChild12} />
      <div className={styles.dashboardChild13} />
      <div className={styles.dashboardChild14} />
      <div className={styles.dashboardChild15} />
      <div className={styles.dashboardChild16} />
      <div className={styles.dashboardChild17} />
      <div className={styles.dashboardChild18} />
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
      <b className={styles.dashboard1}>Dashboard</b>
      <b className={styles.clientes} onClick={onClientesTextClick}>
        Clientes
      </b>
      <img className={styles.ellipseIcon} alt="" src="/undefined17.png" />
      <img
        className={styles.dashboardChild19}
        alt=""
        src="/undefined18.png"
        onClick={onEllipseIcon1Click}
      />
      <div className={styles.dashboardChild20} />
      <div className={styles.dashboardChild21} />
      <b className={styles.deivilyDiasIxcpayContainer}>
        <p className={styles.deivilyDias}>Deivily Dias</p>
        <p className={styles.deivilyDias}>IXCpay</p>
      </b>
    </div>
  );
};

export default Dashboard;
