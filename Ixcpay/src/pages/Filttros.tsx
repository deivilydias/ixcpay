import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Filttros.module.css";
const Filttros: FunctionComponent = () => {
  const navigate = useNavigate();

  const onMainButtonContainer1Click = useCallback(() => {
    navigate("/pagamentos");
  }, [navigate]);

  const onSaveFilters3Click = useCallback(() => {
    navigate("/pagamentos");
  }, [navigate]);

  const onEllipseClick = useCallback(() => {
    navigate("/pagamentos");
  }, [navigate]);

  const onArrowIconClick = useCallback(() => {
    navigate("/pagamentos");
  }, [navigate]);

  return (
    <div className={styles.filttros}>
      <div className={styles.filttrosChild} />
      <div className={styles.filttrosItem} />
      <div className={styles.filttrosInner} />
      <div className={styles.rectangleDiv} />
      <b className={styles.dashboard}>Dashboard</b>
      <b className={styles.clientes}>Clientes</b>
      <img className={styles.ellipseIcon} alt="" src="/undefined17.png" />
      <img className={styles.filttrosChild1} alt="" src="/undefined18.png" />
      <div className={styles.task}>
        <div className={styles.elmcardmain} />
        <img
          className={styles.elmgeneralprogressIcon}
          alt=""
          src="/undefined24.png"
        />
        <div className={styles.elmgeneraltaskstatusdone}>
          <div className={styles.inputwithicon}>
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
          <div className={styles.inputwithicon}>
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
          <div className={styles.inputwithicon}>
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
          <div className={styles.inputwithicon}>
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
          <div className={styles.inputwithicon}>
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
          <div className={styles.inputwithicon}>
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
        src="/undefined35.png"
      />
      <img className={styles.rectangleIcon} alt="" src="/undefined36.png" />
      <div className={styles.mainButton1} onClick={onMainButtonContainer1Click}>
        <div className={styles.elmmainbutton} />
        <b className={styles.saveFilters3} onClick={onSaveFilters3Click}>
          Filtrar
        </b>
      </div>
      <div className={styles.inputwithiconright}>
        <div className={styles.inputwithicon}>
          <div className={styles.container} />
          <div className={styles.elmgeneralinputunselected} />
          <img
            className={styles.icngeneralcalendarIcon}
            alt=""
            src="/undefined7.png"
          />
          <div className={styles.div}>12/08/2023</div>
          <b className={styles.position}>Data de pagamento</b>
        </div>
      </div>
      <div className={styles.taskGroup}>
        <b className={styles.taskGroup1}>Status</b>
        <div className={styles.taskGroup2}>
          <img
            className={styles.icngeneralcheckboxselectedIcon}
            alt=""
            src="/undefined37.png"
          />
          <div className={styles.design}>Pago</div>
        </div>
        <div className={styles.taskGroup3}>
          <img
            className={styles.icngeneralcheckboxselectedIcon1}
            alt=""
            src="/undefined38.png"
          />
          <div className={styles.development}>Atrasado</div>
        </div>
        <div className={styles.taskGroup4}>
          <img
            className={styles.icngeneralcheckboxselectedIcon2}
            alt=""
            src="/undefined39.png"
          />
          <div className={styles.testing}>Processo</div>
        </div>
        <div className={styles.taskGroup5}>
          <img
            className={styles.icngeneralcheckboxselectedIcon3}
            alt=""
            src="/undefined40.png"
          />
          <div className={styles.marketing}>Protesto</div>
        </div>
        <div className={styles.taskGroup6}>
          <img
            className={styles.icngeneralcheckboxselectedIcon4}
            alt=""
            src="/undefined41.png"
          />
          <div className={styles.projectManagement}>Pendente</div>
        </div>
      </div>
      <div className={styles.assignees}>
        <div className={styles.input}>
          <div className={styles.inputwithicon}>
            <div className={styles.container} />
            <div className={styles.elmgeneralinputunavailible} />
            <div className={styles.uiuxDesigner12}>nome</div>
            <img
              className={styles.icngeneralsearchgrayIcon}
              alt=""
              src="/undefined2.png"
            />
            <b className={styles.position1}>Cliente</b>
          </div>
        </div>
        <div className={styles.elmfilterschipsuser}>
          <div className={styles.inputwithicon}>
            <div className={styles.elmcardgray} />
            <img
              className={styles.icnchipsdeleteIcon}
              alt=""
              src="/undefined42.png"
            />
            <div className={styles.violetRobbins}>Gabriela</div>
            <img
              className={styles.elmgeneralphotoIcon6}
              alt=""
              src="/undefined43.png"
            />
          </div>
        </div>
        <div className={styles.elmfilterschipsuser2}>
          <div className={styles.inputwithicon}>
            <div className={styles.elmcardgray} />
            <img
              className={styles.icnchipsdeleteIcon1}
              alt=""
              src="/undefined44.png"
            />
            <div className={styles.violetRobbins}>Maria</div>
            <img
              className={styles.elmgeneralphotoIcon6}
              alt=""
              src="/undefined45.png"
            />
          </div>
        </div>
        <div className={styles.elmfilterschipsuser4}>
          <div className={styles.inputwithicon}>
            <div className={styles.elmcardgray} />
            <img
              className={styles.icnchipsdeleteIcon2}
              alt=""
              src="/undefined46.png"
            />
            <div className={styles.violetRobbins}>Carlos</div>
            <img
              className={styles.elmgeneralphotoIcon6}
              alt=""
              src="/undefined47.png"
            />
          </div>
        </div>
        <div className={styles.elmfilterschipsuser6}>
          <div className={styles.inputwithicon}>
            <div className={styles.elmcardgray} />
            <img
              className={styles.icnchipsdeleteIcon3}
              alt=""
              src="/undefined48.png"
            />
            <div className={styles.violetRobbins}>Eduardo</div>
            <img
              className={styles.elmgeneralphotoIcon6}
              alt=""
              src="/undefined49.png"
            />
          </div>
        </div>
      </div>
      <div className={styles.ellipseDiv} onClick={onEllipseClick} />
      <img
        className={styles.arrowIcon}
        alt=""
        src="/undefined50.png"
        onClick={onArrowIconClick}
      />
    </div>
  );
};

export default Filttros;
