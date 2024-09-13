'use strict';

/**
 * paneller service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::paneller.paneller');
