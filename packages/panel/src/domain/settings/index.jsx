import { Route, Routes } from "react-router-dom";
import SettingsCard from "../../components/atoms/settings-card";
import FeatureToggle from "../../components/fundamentals/feature-toggle";
import ChannelsIcon from "../../components/fundamentals/icons/channels-icon";
import CoinsIcon from "../../components/fundamentals/icons/coins-icon";
import CrosshairIcon from "../../components/fundamentals/icons/crosshair-icon";
import DollarSignIcon from "../../components/fundamentals/icons/dollar-sign-icon";
import HappyIcon from "../../components/fundamentals/icons/happy-icon";
import MailIcon from "../../components/fundamentals/icons/mail-icon";
import MapPinIcon from "../../components/fundamentals/icons/map-pin-icon";
import TaxesIcon from "../../components/fundamentals/icons/taxes-icon";
import TruckIcon from "../../components/fundamentals/icons/truck-icon";
import UsersIcon from "../../components/fundamentals/icons/users-icon";
import SettingsOverview from "../../components/templates/settings-overview";
import CurrencySettings from "./currencies";
import Details from "./details";
import PersonalInformation from "./personal-information";
import Regions from "./regions";
import ReturnReasons from "./return-reasons";
import Taxes from "./taxes";
import Users from "./users";
import KeyIcon from "../../components/fundamentals/icons/key-icon";

const SettingsIndex = () => {
  return (
    <SettingsOverview>
      <SettingsCard
        heading={"Regiony"}
        description={"Správa trhů, na kterých budete působit"}
        icon={<MapPinIcon />}
        to={"/a/settings/regions"}
      />
      <SettingsCard
        heading={"Měny"}
        description={"Správa trhů, na kterých budete působit"}
        icon={<CoinsIcon />}
        to={"/a/settings/currencies"}
      />
      <SettingsCard
        heading={"Podrobnosti o obchodu"}
        description={"Správa obchodních údajů"}
        icon={<CrosshairIcon />}
        to={"/a/settings/details"}
      />
      <SettingsCard
        heading={"Přeprava"}
        description={"Správa přepravních profilů"}
        icon={<TruckIcon />}
        to={"/a/settings/shipping-profiles"}
        disabled={true}
      />
      <SettingsCard
        heading={"Důvody návratu"}
        description={"Správa nastavení objednávky"}
        icon={<DollarSignIcon />}
        to={"/a/settings/return-reasons"}
      />
      <SettingsCard
        heading={"Tým"}
        description={"Správa uživatelů vašeho obchodu Medusa Store"}
        icon={<UsersIcon />}
        to={"/a/settings/team"}
      />
      <SettingsCard
        heading={"Osobní údaje"}
        description={"Správa profilu Medusa"}
        icon={<HappyIcon />}
        to={"/a/settings/personal-information"}
      />
      <SettingsCard
        heading={"kontakt@viceverse.cz"}
        description={"Nemůžete najít odpovědi, které hledáte?"}
        icon={<MailIcon />}
        externalLink={"mailto: kontakt@viceverse.cz"}
      />
      <SettingsCard
        heading={"Nastavení daní"}
        description={"Správa daní napříč regiony a produkty"}
        icon={<TaxesIcon />}
        to={"/a/settings/taxes"}
      />
      <FeatureToggle featureFlag='sales_channels'>
        <SettingsCard
          heading={"Prodejní kanály"}
          description={"Řídit, které produkty jsou dostupné v jakých kanálech"}
          icon={<ChannelsIcon />}
          to={"/a/sales-channels"}
        />
      </FeatureToggle>
      <FeatureToggle featureFlag='publishable_api_keys'>
        <SettingsCard
          heading={"Správa klíčů API"}
          description={"Vytváření a správa klíčů API"}
          icon={<KeyIcon />}
          to={"/a/publishable-api-keys"}
        />
      </FeatureToggle>
    </SettingsOverview>
  );
};

const Settings = () => (
  <Routes className='h-full'>
    <Route index element={<SettingsIndex />} />
    <Route path='/details' element={<Details />} />
    <Route path='/regions/*' element={<Regions />} />
    <Route path='/currencies' element={<CurrencySettings />} />
    <Route path='/return-reasons' element={<ReturnReasons />} />
    <Route path='/team' element={<Users />} />
    <Route path='/personal-information' element={<PersonalInformation />} />
    <Route path='/taxes' element={<Taxes />} />
  </Routes>
);

export default Settings;
