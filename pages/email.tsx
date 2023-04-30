import Seo from '@/components/common/utils/seo';
import { ICommon } from '@/typings/typings';
import Title from 'components/titleSection';
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
      <Title title={'Email'} />
    </main>
  );
};

export default Home;
