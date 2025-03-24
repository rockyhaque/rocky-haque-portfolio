import Footer from '@/components/Footer/Footer';
import Navbar from '@/components/Navbar/Navbar';
import { authOptions } from '@/utils/authOptions';
import { getServerSession } from 'next-auth';
import React, { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const MainLayout = async ({children}: LayoutProps) => {
    const session = await getServerSession(authOptions);

    return (
        <div>
            <Navbar session={session} />
            {children}
            <Footer />
        </div>
    );
};

export default MainLayout;