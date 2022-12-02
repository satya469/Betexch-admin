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
///subadmin route
import SubadminList from "./Pages/Subadmin/SubadminList";
import CreateNewSubadmin from "./Pages/Subadmin/CreateNewSubadmin";
import UpdateSubadmin from "./Pages/Subadmin/UpdateSubadmin";
import SubadminLimitUpdate from "./Pages/Subadmin/SubadminLimitUpdate";
//Master routes
import MasterList from "./Pages/Master/MasterList";
import CreateNewMaster from "./Pages/Master/CreateNewMaster";
import UpdateMaster from "./Pages/Master/UpdateMaster";
import MasterLimitUpdate from "./Pages/Master/MasterLimitUpdate";
// import ClientMasterLimitUpdate from "./Pages/Master/ClientMasterLimitUpdate";
//Super Agent Routes
import SuperAgentList from "./Pages/SuperAgent/SuperAgenetList";
import UpdateSuperAgent from "./Pages/SuperAgent/UpdateSuperAgent";
import CreateNewSuperAgent from "./Pages/SuperAgent/CreateNewSuperAgent";
import SuperAgentLimitUpdate from "./Pages/SuperAgent/SuperAgentLimitUpdate";
//Agent routes
import AgentMaster from "./Pages/AgentMaster/AgentMaster";
import CreateNewAgent from "./Pages/AgentMaster/CreateNewAgent";
import AgentMasterLimitUpdate from "./Pages/AgentMaster/AgentMasterLimitUpdate";
import UpdateAgent from "./Pages/AgentMaster/UpdateAgent";
//Clint routes
import ClientMasterlist from "./Pages/ClientMaster/ClientMasterlist";
import CreateNewClientMaster from "./Pages/ClientMaster/CreateNewClientMaster";
import UpdateClient from "./Pages/ClientMaster/UpdateClient";
import ClientMasterLimitUpdate from "./Pages/ClientMaster/ClientMasterLimitUpdate";

// import CreateNewClientMaster from "./Pages/ClientMaster/CreateNewClientMaster";
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
// import ClientLimitUpdate from "./Pages/UpdateLimit/ClientLimitUpdate";
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
          <Route path="/user-ledger" element={<UserMyLedger />} />
          <Route path="/user-complete-game" element={<UserCompletegame />} />
          <Route path="/user-profile" element={<UserProfile />} />
          <Route path="/user-inplay" element={<UserInplay />} />
          <Route path="/user-casino" element={<UserCasino />} />
          <Route path="/user-start-bet" element={<UserBet />} /> */}
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

            {/* SubadminList */}
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
            <Route path="/subadmin/create" element={<CreateNewSubadmin />} />
            <Route path="/subadmin/update" element={<UpdateSubadmin />} />
            <Route
              path="/subadmin/limitUpdate"
              element={<SubadminLimitUpdate />}
            />
            {/* MasterList */}
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
            <Route path="/master/create" element={<CreateNewMaster />} />
            <Route path="/master/update" element={<UpdateMaster />} />
            <Route path="/master/limitUpdate" element={<MasterLimitUpdate />} />
            {/* SuperAgenetList */}
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
              path="/superAgent/create"
              element={<CreateNewSuperAgent />}
            />
            <Route path="/superAgent/update" element={<UpdateSuperAgent />} />
            <Route
              path="/superAgent/limitUpdate"
              element={<SuperAgentLimitUpdate />}
            />

            {/* AgentMaster */}
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
            <Route path="/agent/create" element={<CreateNewAgent />} />
            <Route path="/agent/update" element={<UpdateAgent />} />
            <Route
              path="/agent/limitUpdate"
              element={<AgentMasterLimitUpdate />}
            />

            {/* ClientMasterlist */}
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
            <Route path="/client/create" element={<CreateNewClientMaster />} />
            <Route path="/client/update" element={<UpdateClient />} />
            <Route
              path="/client/limitUpdate"
              element={<ClientMasterLimitUpdate />}
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
