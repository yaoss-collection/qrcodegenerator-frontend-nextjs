export interface ICommon {
  linkUrl: string;
  linkText: string;
  darkMode: boolean;
  seo: {
    metaTitle: string;
    metaDescription: string;
    ogTitle?: string;
    ogDescription?: string;
    siteName?: string;
    metaImage?: {
      data: {
        attributes: {
          width: number;
          height: number;
          url: string;
          alternativeText: string;
        };
      };
    };
    metaSocial?: {
      id: string;
      socialNetwork?: 'Facebook' | 'Twitter';
      title?: string;
      description?: string;
      image?: {
        data?: {
          attributes?: {
            url?: string;
            width: string;
            height: string;
            mime?: string;
            alternativeText?: string;
          };
        };
      };
    }[];
  };
}
