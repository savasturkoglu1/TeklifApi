import type { Schema, Attribute } from '@strapi/strapi';

export interface SharedAku extends Schema.Component {
  collectionName: 'components_shared_akus';
  info: {
    displayName: 'Aku';
    description: '';
  };
  attributes: {
    akus: Attribute.Relation<'shared.aku', 'oneToOne', 'api::aku.aku'>;
    adet: Attribute.Integer &
      Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
  };
}

export interface SharedInvertor extends Schema.Component {
  collectionName: 'components_shared_invertors';
  info: {
    displayName: 'Invertor';
  };
  attributes: {
    invertors: Attribute.Relation<
      'shared.invertor',
      'oneToMany',
      'api::invertor.invertor'
    >;
    adet: Attribute.Integer &
      Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
  };
}

export interface SharedMusteri extends Schema.Component {
  collectionName: 'components_shared_musteris';
  info: {
    displayName: 'Musteri';
  };
  attributes: {
    firma: Attribute.String;
    yetkili: Attribute.String;
    telefon: Attribute.String;
    eposta: Attribute.String;
  };
}

export interface SharedPanel extends Schema.Component {
  collectionName: 'components_shared_panels';
  info: {
    displayName: 'Panel';
    description: '';
  };
  attributes: {
    paneller: Attribute.Relation<
      'shared.panel',
      'oneToOne',
      'api::paneller.paneller'
    >;
    adet: Attribute.Integer &
      Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'shared.aku': SharedAku;
      'shared.invertor': SharedInvertor;
      'shared.musteri': SharedMusteri;
      'shared.panel': SharedPanel;
    }
  }
}
