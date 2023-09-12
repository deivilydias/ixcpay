import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./EditarCliente.module.css";
const EditarCliente: FunctionComponent = () => {
  const navigate = useNavigate();

  const onIconClick = useCallback(() => {
    navigate("/pagamentos");
  }, [navigate]);

  return (
    <div className={styles.editarCliente}>
      <div className={styles.editarClienteChild} />
      <div className={styles.editarClienteItem} />
      <div className={styles.editarClienteInner} />
      <div className={styles.rectangleDiv} />
      <b className={styles.dashboard}>Dashboard</b>
      <b className={styles.clientes}>Clientes</b>
      <img className={styles.ellipseIcon} alt="" src="/undefined17.png" />
      <img
        className={styles.editarClienteChild1}
        alt=""
        src="/undefined18.png"
      />
      <div className={styles.task}>
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
        <div className={styles.assigneeCopy}>Carlos</div>
        <div className={styles.priority}>Prioridade</div>
        <div className={styles.taskStatusMedium}>
          <div className={styles.taskStatusMedium1}>
            <b className={styles.uiuxDesigner1}>Médio</b>
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
          src="/undefined26.png"
        />
        <div className={styles.research}>Cartão de Débito</div>
        <div className={styles.d4h}>2d 4h</div>
        <div className={styles.spentTime}>Tempo</div>
        <div className={styles.d2h}>1d 2h</div>
        <div className={styles.taskName}>Tipo</div>
      </div>
      <div className={styles.task1}>
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
        <div className={styles.assigneeCopy1}>Carlos</div>
        <div className={styles.priority1}>Prioridade</div>
        <div className={styles.taskStatusMedium}>
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
          className={styles.elmgeneralphotoIcon1}
          alt=""
          src="/undefined29.png"
        />
        <div className={styles.research1}>{`Dinheiro `}</div>
        <div className={styles.d4h1}>2d 4h</div>
        <div className={styles.spentTime1}>Tempo</div>
        <div className={styles.d2h1}>1d 2h</div>
        <div className={styles.taskName1}>Tipo</div>
      </div>
      <div className={styles.task2}>
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
        <div className={styles.assigneeCopy}>Carlos</div>
        <div className={styles.priority}>Prioridade</div>
        <div className={styles.taskStatusMedium}>
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
      <div className={styles.task3}>
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
        <div className={styles.assigneeCopy}>Carlos</div>
        <div className={styles.priority}>Prioridade</div>
        <div className={styles.taskStatusMedium}>
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
        <div className={styles.taskStatusMedium}>
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
      <div className={styles.task5}>
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
        <div className={styles.assigneeCopy}>Carlos</div>
        <div className={styles.priority}>Prioridade</div>
        <div className={styles.taskStatusMedium}>
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
        <div className={styles.research5}>Dinheiro</div>
        <div className={styles.d4h}>2d 4h</div>
        <div className={styles.spentTime}>Tempo</div>
        <div className={styles.d2h}>1d 2h</div>
        <div className={styles.taskName}>Tipo</div>
      </div>
      <b className={styles.projects}>项目</b>
      <img className={styles.filtersIcon} alt="" src="/undefined33.png" />
      <div className={styles.mainButton}>
        <div className={styles.elmmainbutton} />
        <img
          className={styles.icngeneraladdwhiteIcon}
          alt=""
          src="/undefined34.png"
        />
        <b className={styles.addProject}>Adicionar</b>
      </div>
      <img
        className={styles.elmgeneraloverlayIcon}
        alt=""
        src="/undefined51.png"
      />
      <div className={styles.addTask}>
        <div className={styles.elmcardmain6} />
        <img className={styles.addTaskChild} alt="" src="/undefined52.png" />
        <img className={styles.addTaskItem} alt="" src="/undefined53.png" />
        <img className={styles.addTaskInner} alt="" src="/undefined54.png" />
        <img className={styles.groupIcon} alt="" src="/undefined55.png" />
        <img className={styles.addTaskChild1} alt="" src="/undefined56.png" />
        <img className={styles.addTaskChild2} alt="" src="/undefined57.png" />
        <div className={styles.time}>
          <div className={styles.elmcardgray} />
          <img
            className={styles.elmgeneralprogressIcon6}
            alt=""
            src="/undefined58.png"
          />
          <div className={styles.d3h25mContainer}>
            <p className={styles.tempoRestante}>{`Tempo restante `}</p>
            <p className={styles.tempoRestante}>1d 3h25m</p>
          </div>
        </div>
        <div className={styles.mainButton1}>
          <div className={styles.elmmainbutton} />
          <b className={styles.saveTask}>Salvar</b>
        </div>
        <div className={styles.input}>
          <div className={styles.elmgeneraltaskstatusdone1}>
            <div className={styles.container} />
            <div className={styles.elmgeneralinputunselected} />
            <div className={styles.div}>Descritivo do trabalho</div>
            <b className={styles.position}>Descrição</b>
          </div>
        </div>
        <div className={styles.inputwithiconright}>
          <div className={styles.inputwithiconright1}>
            <div className={styles.container} />
            <div className={styles.elmgeneralinputunselected} />
            <img
              className={styles.icngeneraltimegrayIcon}
              alt=""
              src="/undefined59.png"
            />
            <div className={styles.div}>下午2点</div>
            <b className={styles.position1}>Data fim</b>
          </div>
        </div>
        <div className={styles.inputwithiconright2}>
          <div className={styles.elmgeneraltaskstatusdone1}>
            <div className={styles.container} />
            <div className={styles.elmgeneralinputunselected} />
            <img
              className={styles.icngeneraltimegrayIcon}
              alt=""
              src="/undefined7.png"
            />
            <div className={styles.div}>12/09/2023</div>
            <b className={styles.position}>Data inicio</b>
          </div>
        </div>
        <div className={styles.inputbigfield}>
          <div className={styles.elmgeneraltaskstatusdone1}>
            <div className={styles.container} />
            <div className={styles.elmgeneralinputunselected3} />
            <div className={styles.addSomeDescription}>
              Observações de valores e tratados
            </div>
            <b className={styles.description}>Observações</b>
          </div>
        </div>
        <b className={styles.timeTracking}>Cliente</b>
        <img
          className={styles.icon}
          alt=""
          src="/undefined60.png"
          onClick={onIconClick}
        />
      </div>
      <div className={styles.ellipseDiv} />
      <div className={styles.editarClienteChild2} />
      <b className={styles.deivilyDiasIxcpayContainer}>
        <p className={styles.tempoRestante}>Deivily Dias</p>
        <p className={styles.tempoRestante}>IXCpay</p>
      </b>
    </div>
  );
};

export default EditarCliente;
