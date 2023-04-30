import Seo from '@/components/common/utils/seo';
import { ICommon } from '@/typings/typings';
import type { NextPage } from 'next';

const Home: NextPage<{ seo: ICommon['seo'] }> = () => {
  // Ceci est à supprimer
  const seo = {
    metaTitle: 'Accueil - NOM DU SITE',
    metaDescription: 'Accueil',
  };
  return (
    <main>
      <Seo seo={seo} />
      <div className="flex h-screen items-center justify-center font-spline-sans text-6xl font-medium text-secondary">
        {/* <TabComponent tabs={tabs} />*/}
      </div>
    </main>
  );
};

export default Home;
