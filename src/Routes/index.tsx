import { Routes, Route, Navigate } from 'react-router-dom';
import { HomePage } from '@/Pages/HomePage/HomePage';
import { Shop } from '@/Pages/Shop/Shop';
import { Menu } from '@/Components/Menu/Menu';
import { Faq } from '@/Components/Faq/Faq';
import { Contact } from '@/Components/Contact/Contact';
import { Safety } from '@/Components/Safety/Safety';
import { RedPill } from '@/Components/Redpill/Redpill';
import { PurplePill } from '@/Components/Purplepill/Purplepill';
import { GreenPill } from '@/Components/Greenpill/GreenPill';
import { SupermanPill } from '@/Components/Supermanpill/SupermanPill';
import { BluePill } from '@/Components/BluePill/BluePill';
import { ChicagobullsPill } from '@/Components/ChicagobullsPill/ChicagoBullsPill'
import { MitsubishiPill } from '@/Components/MitsubishiPill/MitsubishiPill';
import { SmilingPill } from '@/Components/SmilingPill/SmilingPill';
import { YellowPill } from '@/Components/YellowPill/YellowPill';
import { PinkPill } from '@/Components/PinkPill/PinkPill';
import { Login } from '@/Pages/Login/Login';
import { CreateAccount } from '@/Pages/CreateAccount/CreateAccount';
import { DefaultLayout } from '@/Components/DefaultLayout/DefaultLayout';

export function AppRoutes() {
  return (
    <Routes>

      <Route path="/" element={<HomePage />}>
        <Route index element={<Navigate to="/menu" replace />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/redpill" element={<RedPill />} />
        <Route path="/purplepill" element={<PurplePill />} />
        <Route path="/greenpill" element={<GreenPill />} />
        <Route path="/supermanpill" element={<SupermanPill />} />
        <Route path="/bluepill" element={<BluePill />} />
        <Route path="/chicagobullspill" element={<ChicagobullsPill />} />
        <Route path="/mitsubishipill" element={<MitsubishiPill />} />
        <Route path="/smilingpill" element={<SmilingPill />} />
        <Route path="/yellowpill" element={<YellowPill />} />
        <Route path="/pinkpill" element={<PinkPill />} />
      </Route>

      <Route element={<DefaultLayout />}>
        <Route path="/shop" element={<Shop />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/safety" element={<Safety />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<CreateAccount />} />
      </Route>

    </Routes>
  );
}
