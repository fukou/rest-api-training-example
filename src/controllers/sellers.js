const httpStatus = require('http-status');
const SellerService = require('../services/sellers');

const sellerService = new SellerService();

class SellerController {
  async blockSeller(req, res) {
    const { id } = req.params;
    const result = await sellerService.blockSeller(id);
    res.status(httpStatus.OK).send(result);
  }
  async searchSeller(req, res) {
    const { seller, page, limit } = req.query;
    const result = await sellerService.searchSeller(seller, parseInt(page), parseInt(limit));
    res.status(httpStatus.OK).send(result);
  }
}

module.exports = SellerController;