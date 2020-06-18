import api from "../config/apiConfig"

export default {
  async index(request, response) {
    const responseAllCards = await api.get();
    return response.json(responseAllCards.data);
  },

  async show(request, response) {
    const { id } = request.params;  
    if (!isNaN(id)) {
      const responseFindCard = await api.get(`${id}`)
      return response.json(responseFindCard.data);
    }
      return response.redirect("/");
  }

}