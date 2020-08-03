import config from '../config';

const URL_CATEGORIES = `${config.URL_BACKEND}/categorias`;

function getAllWithVideos() {
  return fetch(`${URL_CATEGORIES}?_embed=videos`)
    .then(async (respotaDoServidor) => {
      if (respotaDoServidor.ok) {
        const resposta = await respotaDoServidor.json();
        return resposta;
      }
      throw new Error('Não foi possível acessar o servidor : (');
    });
}
export default {
  getAllWithVideos,
};
