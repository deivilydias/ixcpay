import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Pagamentos.module.css";
const Pagamentos: FunctionComponent = () => {
  const navigate = useNavigate();

  const onDashboardTextClick = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);

  const onTaskContainerClick = useCallback(() => {
    navigate("/editar-cliente");
  }, [navigate]);

  const onTaskContainer1Click = useCallback(() => {
    navigate("/editar-cliente");
  }, [navigate]);

  const onTaskContainer2Click = useCallback(() => {
    navigate("/editar-cliente");
  }, [navigate]);

  const onTaskContainer3Click = useCallback(() => {
    navigate("/editar-cliente");
  }, [navigate]);

  const onTaskContainer5Click = useCallback(() => {
    navigate("/editar-cliente");
  }, [navigate]);

  const onFiltersClick = useCallback(() => {
    navigate("/filttros");
  }, [navigate]);

  return (
    <div className={styles.pagamentos}>
      <div className={styles.pagamentosChild} />
      <div className={styles.pagamentosItem} />
      <div className={styles.pagamentosInner} />
      <div className={styles.rectangleDiv} />
      <b className={styles.dashboard} onClick={onDashboardTextClick}>
        Dashboard
      </b>
      <b className={styles.clientes}>Clientes</b>
      <img className={styles.ellipseIcon} alt="" src="/undefined17.png" />
      <img className={styles.pagamentosChild1} alt="" src="/undefined18.png" />
      <div className={styles.task} onClick={onTaskContainerClick}>
        <div className={styles.elmcardmain} />
        <img
          className={styles.elmgeneralprogressIcon}
          alt=""
          src="/undefined24.png"
        />
        <div className={styles.elmgeneraltaskstatusdone}>
          <div className={styles.elmgeneraltaskstatusdone1}>
            <div className={styles.bgtaskstatusgreen} />
            <b className={styles.uiuxDesigner}>Atrasado</b>
          </div>
        </div>
        <div className={styles.estimate}>Restante</div>
        <div className={styles.assigneeCopy}>Gabriela</div>
        <div className={styles.priority}>Prioridade</div>
        <div className={styles.taskStatusMedium}>
          <div className={styles.taskStatusMedium1}>
            <b className={styles.uiuxDesigner1}>Baixo</b>
            <div className={styles.icngeneralprioritymedium}>
              <div className={styles.container}>
                <div className={styles.container} />
                <img
                  className={styles.priorityIcon}
                  alt=""
                  src="/undefined25.png"
                />
              </div>
            </div>
          </div>
        </div>
        <img
          className={styles.elmgeneralphotoIcon}
          alt=""
          src="/undefined61.png"
        />
        <div className={styles.research}>Cartão de Débito</div>
        <div className={styles.d4h}>2d 4h</div>
        <div className={styles.spentTime}>Tempo</div>
        <div className={styles.d2h}>1d 2h</div>
        <div className={styles.taskName}>Tipo</div>
      </div>
      <div className={styles.task1} onClick={onTaskContainer1Click}>
        <div className={styles.elmcardmain} />
        <img
          className={styles.elmgeneralprogressIcon1}
          alt=""
          src="/undefined27.png"
        />
        <div className={styles.elmgeneraltaskstatusdone2}>
          <div className={styles.elmgeneraltaskstatusdone1}>
            <div className={styles.bgtaskstatusgreen1} />
            <b className={styles.uiuxDesigner2}>Processo</b>
          </div>
        </div>
        <div className={styles.estimate1}>Restante</div>
        <div className={styles.assigneeCopy1}>Lucas</div>
        <div className={styles.priority1}>Prioridade</div>
        <div className={styles.taskStatusMedium2}>
          <div className={styles.taskStatusMedium1}>
            <b className={styles.uiuxDesigner3}>alto</b>
            <div className={styles.icngeneralprioritymedium}>
              <div className={styles.container}>
                <div className={styles.container} />
                <img
                  className={styles.priorityIcon}
                  alt=""
                  src="/undefined28.png"
                />
              </div>
            </div>
          </div>
        </div>
        <img
          className={styles.elmgeneralphotoIcon1}
          alt=""
          src="/undefined62.png"
        />
        <div className={styles.research1}>{`Dinheiro `}</div>
        <div className={styles.d4h1}>2d 4h</div>
        <div className={styles.spentTime1}>Tempo</div>
        <div className={styles.d2h1}>1d 2h</div>
        <div className={styles.taskName1}>Tipo</div>
      </div>
      <div className={styles.task2} onClick={onTaskContainer2Click}>
        <div className={styles.elmcardmain} />
        <img
          className={styles.elmgeneralprogressIcon2}
          alt=""
          src="/undefined30.png"
        />
        <div className={styles.elmgeneraltaskstatusdone4}>
          <div className={styles.elmgeneraltaskstatusdone1}>
            <div className={styles.bgtaskstatusgreen2} />
            <b className={styles.uiuxDesigner4}>Pago</b>
          </div>
        </div>
        <div className={styles.estimate}>Restante</div>
        <div className={styles.assigneeCopy2}>Isaque</div>
        <div className={styles.priority}>Prioridade</div>
        <div className={styles.taskStatusMedium4}>
          <div className={styles.taskStatusMedium1}>
            <b className={styles.uiuxDesigner5}>Médio</b>
            <div className={styles.icngeneralprioritymedium}>
              <div className={styles.container}>
                <div className={styles.container} />
                <img
                  className={styles.priorityIcon}
                  alt=""
                  src="/undefined31.png"
                />
              </div>
            </div>
          </div>
        </div>
        <img
          className={styles.elmgeneralphotoIcon2}
          alt=""
          src="/undefined63.png"
        />
        <div className={styles.research2}>Boleto Bancário</div>
        <div className={styles.d4h}>2d 4h</div>
        <div className={styles.spentTime}>Tempo</div>
        <div className={styles.d2h}>1d 2h</div>
        <div className={styles.taskName}>Tipo</div>
      </div>
      <div className={styles.task3} onClick={onTaskContainer3Click}>
        <div className={styles.elmcardmain} />
        <img
          className={styles.elmgeneralprogressIcon2}
          alt=""
          src="/undefined30.png"
        />
        <div className={styles.elmgeneraltaskstatusdone4}>
          <div className={styles.elmgeneraltaskstatusdone1}>
            <div className={styles.bgtaskstatusgreen2} />
            <b className={styles.uiuxDesigner4}>Pago</b>
          </div>
        </div>
        <div className={styles.estimate}>Restante</div>
        <div className={styles.assigneeCopy2}>Carlos</div>
        <div className={styles.priority}>Prioridade</div>
        <div className={styles.taskStatusMedium4}>
          <div className={styles.taskStatusMedium1}>
            <b className={styles.uiuxDesigner5}>Médio</b>
            <div className={styles.icngeneralprioritymedium}>
              <div className={styles.container}>
                <div className={styles.container} />
                <img
                  className={styles.priorityIcon}
                  alt=""
                  src="/undefined31.png"
                />
              </div>
            </div>
          </div>
        </div>
        <img
          className={styles.elmgeneralphotoIcon2}
          alt=""
          src="/undefined32.png"
        />
        <div className={styles.research2}>Boleto Bancário</div>
        <div className={styles.d4h}>2d 4h</div>
        <div className={styles.spentTime}>Tempo</div>
        <div className={styles.d2h}>1d 2h</div>
        <div className={styles.taskName}>Tipo</div>
      </div>
      <div className={styles.task4}>
        <div className={styles.elmcardmain} />
        <img
          className={styles.elmgeneralprogressIcon4}
          alt=""
          src="/undefined27.png"
        />
        <div className={styles.elmgeneraltaskstatusdone4}>
          <div className={styles.elmgeneraltaskstatusdone1}>
            <div className={styles.bgtaskstatusgreen2} />
            <b className={styles.uiuxDesigner4}>Pago</b>
          </div>
        </div>
        <div className={styles.estimate1}>Restante</div>
        <div className={styles.assigneeCopy1}>Carlos</div>
        <div className={styles.priority1}>Prioridade</div>
        <div className={styles.taskStatusMedium4}>
          <div className={styles.taskStatusMedium1}>
            <b className={styles.uiuxDesigner3}>Médio</b>
            <div className={styles.icngeneralprioritymedium}>
              <div className={styles.container}>
                <div className={styles.container} />
                <img
                  className={styles.priorityIcon}
                  alt=""
                  src="/undefined28.png"
                />
              </div>
            </div>
          </div>
        </div>
        <img
          className={styles.elmgeneralphotoIcon4}
          alt=""
          src="/undefined29.png"
        />
        <div className={styles.research4}>Cartão de crédito</div>
        <div className={styles.d4h1}>2d 4h</div>
        <div className={styles.spentTime1}>Tempo</div>
        <div className={styles.d2h1}>1d 2h</div>
        <div className={styles.taskName1}>Tipo</div>
      </div>
      <div className={styles.task5} onClick={onTaskContainer5Click}>
        <div className={styles.elmcardmain} />
        <img
          className={styles.elmgeneralprogressIcon2}
          alt=""
          src="/undefined30.png"
        />
        <div className={styles.elmgeneraltaskstatusdone10}>
          <div className={styles.elmgeneraltaskstatusdone1}>
            <div className={styles.bgtaskstatusgreen5} />
            <b className={styles.uiuxDesigner10}>Protesto</b>
          </div>
        </div>
        <div className={styles.estimate}>Restante</div>
        <div className={styles.assigneeCopy2}>Ana</div>
        <div className={styles.priority}>Prioridade</div>
        <div className={styles.taskStatusMedium4}>
          <div className={styles.taskStatusMedium1}>
            <b className={styles.uiuxDesigner5}>Médio</b>
            <div className={styles.icngeneralprioritymedium}>
              <div className={styles.container}>
                <div className={styles.container} />
                <img
                  className={styles.priorityIcon}
                  alt=""
                  src="/undefined31.png"
                />
              </div>
            </div>
          </div>
        </div>
        <img
          className={styles.elmgeneralphotoIcon2}
          alt=""
          src="/undefined64.png"
        />
        <div className={styles.research5}>Dinheiro</div>
        <div className={styles.d4h}>2d 4h</div>
        <div className={styles.spentTime}>Tempo</div>
        <div className={styles.d2h}>1d 2h</div>
        <div className={styles.taskName}>Tipo</div>
      </div>
      <b className={styles.projects}>项目</b>
      <img
        className={styles.filtersIcon}
        alt=""
        src="/undefined33.png"
        onClick={onFiltersClick}
      />
      <div className={styles.mainButton}>
        <div className={styles.elmmainbutton} />
        <img
          className={styles.icngeneraladdwhiteIcon}
          alt=""
          src="/undefined34.png"
        />
        <b className={styles.addProject}>Adicionar</b>
      </div>
      <div className={styles.ellipseDiv} />
      <div className={styles.pagamentosChild2} />
      <b className={styles.deivilyDiasIxcpayContainer}>
        <p className={styles.deivilyDias}>Deivily Dias</p>
        <p className={styles.deivilyDias}>IXCpay</p>
      </b>
    </div>
  );
};

export default Pagamentos;
