import { BrowserRouter, Routes, Route } from "react-router-dom";

import BetDetails from "./Layouts/BetDetails";
import MainLayout from "./Layouts/MainLayout";
import CashTransaction from "./Pages/CashTransaction";
import Casino from "./Pages/Casino";
import CasinoBets from "./Pages/CasinoBets";
import ClientPlusMinus from "./Pages/ClientPlusMinus";
import CompleteGames from "./Pages/CompleteGames";
import CreateUser from "./Pages/CreateUser";
import Dashboard from "./Pages/Dashboard";
import InPlay from "./Pages/InPlay";
import Ledger from "./Pages/Ledger";
import LiveReport from "./Pages/LiveReport";
import Login from "./Pages/Login";
import LoginReport from "./Pages/LoginReport";
import MatchAndSessionPM from "./Pages/MatchAndSessionPM";
import MatchBetDetails from "./Pages/MatchBetDetails";
import Reports from "./Pages/Reports";
import SessionBetDetails from "./Pages/SessionBetDetails";
import SessionPMList from "./Pages/SessionPMList";
import SubadminList from "./Pages/Subadmin/SubadminList";
// import UsersList from "./Pages/UsersList";
import AgentLedger from "./Pages/LedgerManagement/AgentLedger";
import ClientLedger from "./Pages/LedgerManagement/ClientLedger";
import MasterLedger from "./Pages/LedgerManagement/MasterLedger";
import SuperAgentLedger from "./Pages/LedgerManagement/SuperAgentLedger";
import MyLedger from "./Pages/LedgerManagement/MyLedger";
import ClientLoginReport from "./Pages/LoginReports/ClientLoginReport";
import AgentLoginReport from "./Pages/LoginReports/AgentLoginReport";
import MasterLoginReport from "./Pages/LoginReports/MasterLoginReport";
import SuperAgentLoginReport from "./Pages/LoginReports/SuperAgentReport";
import ClientCashTransaction from "./Pages/CashTransaction/ClientCashTransaction";
// import ClientList from "./Pages/UsersList/ClientList";
import ClientMasterlist from "./Pages/ClientMaster/ClientMasterlist";
// import AgentList from "./Pages/UsersList/AgentList";
import AgentMaster from "./Pages/AgentMaster/AgentMaster";
// import SuperAgentList from "./Pages/UsersList/SuperAgentList";
import SuperAgentList from "./Pages/SuperAgent/SuperAgenetList";
// import MasterList from "./Pages/UsersList/MasterList";
import MasterList from "./Pages/Master/MasterList";
import AgentCreate from "./Pages/CreateUser/AgentCreate";
import SuperAgentCreate from "./Pages/CreateUser/SuperAgentCreate";
import MasterCreate from "./Pages/CreateUser/MasterCreate";
import ClinetCreate from "./Pages/CreateUser/ClinetCreate";
import SuperAgentLimitUpdate from "./Pages/UpdateLimit/SuperAgentLimitUpdate";

///////////////control panel ////////
import ControlLogin from "./ControlPanel/ControlLogin";
import PrivateRoute from "./PrivateRoute";
import AllMatches from "./ControlPanel/AllMatches";

///////////////user control panel ////////
// import UserLogin from "./ClientPanel/UserLogin";
// import UserInplay from "./ClientPanel/UserInplay";
// import UserCompletegame from "./ClientPanel/UserCompletegame";
// import UserMyLedger from "./ClientPanel/UserMyLedger";
// import UserProfile from "./ClientPanel/UserProfile";
// import UserCasino from "./ClientPanel/UserCasino";
import MasterLimitUpdate from "./Pages/UpdateLimit/MasterLimitUpdate";
import AgentLimitUpdate from "./Pages/UpdateLimit/AgentLimitUpdate";
import ClientLimitUpdate from "./Pages/UpdateLimit/ClientLimitUpdate";
import InPlayList from "./ControlPanel/InPlay";
import SessionInplay from "./ControlPanel/SessionInplay";
import SessionMinMaxLimit from "./ControlPanel/SessionMinMaxLimit";
import SessionDesscion from "./ControlPanel/SessionDesscion";
import RepeatSessionDesscion from "./ControlPanel/RepeatSessionDesscion";
import MatchDesscion from "./ControlPanel/MatchDesscion";
import CompleteSports from "./ControlPanel/CompleteSports";
import ViewDesicion from "./ControlPanel/ViewDesicion";
// import UserBet from "./ClientPanel/UserBet";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* ////////login panel //////////// */}
          {/* <Route path="/user-login" element={<UserLogin />} />
          <Route path="/user-ledger" element={ <UserMyLedger/> } />
          <Route path="/user-complete-game" element={ <UserCompletegame/> } />
          <Route path="/user-profile" element={ <UserProfile/> } />
          <Route path="/user-inplay" element={ <UserInplay/> } />
          <Route path="/user-casino" element={ <UserCasino/> } />
          <Route path="/user-start-bet" element={ <UserBet/> } /> */}
          {/* ////////end user panel //////////// */}\
          {/* ////////control panel //////////// */}
          <Route path="/super-admin/login" element={<ControlLogin />} />
          <Route path="/super-admin/all-matches" element={<AllMatches />} />
          <Route path="/super-admin/inplay-list" element={<InPlayList />} />
          <Route path="/session_inplay/:gameId" element={<SessionInplay />} />
          <Route
            path="/super-admin/Session-Min-Max-Limit"
            element={<SessionMinMaxLimit />}
          />
          <Route
            path="/super-admin/session-desscion"
            element={<SessionDesscion />}
          />
          <Route
            path="/super-admin/repeat-session-desscion"
            element={<RepeatSessionDesscion />}
          />
          <Route
            path="/super-admin/match-desscion"
            element={<MatchDesscion />}
          />
          <Route
            path="/super-admin/complete-sports"
            element={<CompleteSports />}
          />
          <Route
            path="/super-admin/view-desicion/:matchId"
            element={<ViewDesicion />}
          />
          {/* ////////end control panel //////////// */}
          <Route path="/" element={<Login />} />
          <Route path="/" element={<MainLayout />}>
            <Route path="/dashboard" index element={<Dashboard />} />
            <Route
              path="/sub-admin"
              index
              element={
                <SubadminList
                  title="Sub Admin Master"
                  clickst="shoot"
                  roleprops="subadmin"
                  type="subadmin"
                />
              }
            />
            <Route
              path="/masters"
              index
              element={
                <MasterList
                  title="Master Details"
                  roleprops="master"
                  type="master"
                />
              }
            />
            <Route
              path="/superagents"
              index
              element={
                <SuperAgentList
                  title="Superagent Details"
                  roleprops="superagents"
                  type="superagents"
                />
              }
            />
            <Route
              path="/agents"
              index
              element={
                <AgentMaster
                  title="Agent Details"
                  roleprops="agents"
                  type="agents"
                />
              }
            />
            <Route
              path="/clients"
              index
              element={
                <ClientMasterlist
                  title="Client"
                  roleprops="client"
                  type="client"
                />
              }
            />
            {/* <Route path="/create" index element={<CreateUser />} /> */}

            <Route
              path="/agents/create-agent"
              index
              element={<AgentCreate />}
            />
            <Route
              path="/masters/create-master"
              index
              element={<MasterCreate />}
            />
            <Route
              path="/superagents/create-superagent"
              element={<SuperAgentCreate />}
            />
            <Route
              path="/clients/create-client"
              index
              element={<ClinetCreate />}
            />

            <Route
              path="/superagents/limit-superagent"
              element={
                <SuperAgentLimitUpdate title="Super Agent Update Limit" />
              }
            />
            <Route
              path="/masters/limit-master"
              element={<MasterLimitUpdate title="Master Update Limit" />}
            />
            <Route
              path="/agents/limit-agent"
              element={<AgentLimitUpdate title=" Agent Update Limit" />}
            />
            <Route
              path="/clients/limit-client"
              element={<ClientLimitUpdate title="Client Update Limit" />}
            />

            <Route path="/inplay" index element={<InPlay />} />
            <Route path="/complete-games" index element={<CompleteGames />} />
            <Route path="/live-report" element={<LiveReport />} />
            <Route path="/match-session-pm" element={<MatchAndSessionPM />} />
            <Route path="/session-pm-list" element={<SessionPMList />} />
            <Route path="/bet-details" element={<BetDetails />} />
            <Route path="/match-bet-details" element={<MatchBetDetails />} />
            <Route
              path="/session-bet-details"
              element={<SessionBetDetails />}
            />

            <Route
              path="/teenpatti_t20"
              element={<Casino game_type="TEENPATTI T20" />}
            />
            <Route
              path="/dragon_tiger"
              element={<Casino game_type="DRAGON TIGER" />}
            />
            <Route path="/lucky7_a" element={<Casino game_type="LUCKY7 A" />} />
            <Route path="/casino-bets" element={<CasinoBets />} />

            <Route path="/">
              <Route
                path="/transactions"
                element={<ClientCashTransaction user="Client" />}
              />
              <Route
                path="/agent-transactions"
                element={<CashTransaction user="Agent" />}
              />
              <Route
                path="/superagent-transactions"
                element={<CashTransaction user="Super Agent" />}
              />
              <Route
                path="/master-transactions"
                element={<CashTransaction user="Master" />}
              />
              <Route
                path="/subadmin-transactions"
                element={<CashTransaction user="Sub Admin" />}
              />
            </Route>

            <Route path="/my-ledger" element={<MyLedger />} />
            <Route path="/client-plus-minus" element={<ClientPlusMinus />} />
            <Route
              path="/client-ledger"
              element={<ClientLedger ledger_type="client" user="Client" />}
            />
            <Route
              path="/agent-ledger"
              element={
                <AgentLedger
                  ledger_type="agent"
                  api="all-agent-ledger"
                  user="Agent"
                />
              }
            />
            <Route
              path="/super-ledger"
              element={
                <SuperAgentLedger
                  ledger_type="super"
                  api="all-superagent-ledger"
                  user="Super"
                />
              }
            />
            <Route
              path="/master-ledger"
              element={
                <MasterLedger
                  ledger_type="master"
                  api="all-master-ledger"
                  user="Master"
                />
              }
            />
            <Route
              path="/admin-ledger"
              element={<Ledger ledger_type="admin" user="Admin" />}
            />

            <Route path="/">
              <Route path="/admin-report" element={<Reports user="Admin" />} />
              <Route
                path="/master-report"
                element={<Reports user="Master" />}
              />
              <Route path="/super-report" element={<Reports user="Super" />} />
              <Route path="/agent-report" element={<Reports user="Agent" />} />
              <Route
                path="/client-report"
                element={<Reports user="Client" />}
              />
            </Route>

            <Route path="/">
              <Route
                path="/admin-login-report"
                element={<LoginReport user="Admin" />}
              />
              <Route
                path="/master-login-report"
                element={<MasterLoginReport user="Master" />}
              />
              <Route
                path="/super-login-report"
                element={<SuperAgentLoginReport user="Super" />}
              />
              <Route
                path="/agent-login-report"
                element={<AgentLoginReport user="Agent" />}
              />
              <Route
                path="/client-login-report"
                element={<ClientLoginReport user="Client" />}
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
