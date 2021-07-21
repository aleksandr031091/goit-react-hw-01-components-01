import React from "react";
import data from "../data/index";

import Section from "./section/Section";
import Profile from "./social-profile/Profile";
import Statistic from "./statistic/Statistic";
import FriendsList from "./friendsList/FriendsList";
import Transactions from "./transaction/Transaction";

const App = () => (
  <>
    <Profile
      name={data.user.name}
      tag={data.user.tag}
      location={data.user.location}
      avatar={data.user.avatar}
      stats={data.user.stats}
    />

    <Section title="Upload stats">
      <Statistic stats={data.statistical} />
    </Section>

    <Section title="friends">
      <FriendsList friends={data.friends} />
    </Section>

    <Section title="Transactions">
      <Transactions transactions={data.transacrions} />
    </Section>
  </>
);

export default App;
