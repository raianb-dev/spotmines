import requests
from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from django.http import JsonResponse

@login_required
def aviatrix(request):
    return render(request, 'aviatrix.html')

def get_last_results(request):
    try:
        response = requests.post("https://aviatrix-gateway-nft-prod.aviatrix.bet/v2/aviatrix.gateway.Api/GetGameHistory", json={"limit": 5})
        response.raise_for_status()  # Verifica se houve algum erro na resposta HTTP
        game_history = response.json()

        context = {
            'gameHistory': game_history['games']
        }

        return render(request, 'last_results.html', context)
    except requests.exceptions.RequestException as e:
        # Tratamento de erro
        error_message = "Ocorreu um erro na requisição: " + str(e)
        return JsonResponse({'error': error_message}, status=500)

import requests
from django.http import JsonResponse

import requests
from django.http import JsonResponse

def json_results(request):
    try:
        response = requests.post("https://aviatrix-gateway-nft-prod.aviatrix.bet/v2/aviatrix.gateway.Api/GetGameHistory", json={"limit": 1})
        response.raise_for_status()  # Verifica se houve algum erro na resposta HTTP
        game_history = response.json()

        # Verifica se há jogos na resposta
        if 'games' in game_history:
            games = game_history['games']

            # Verifica cada jogo individualmente
            for game in games:
                if 'random' in game and game['random'] > 1:
                    game['cor'] = '2x'

        return JsonResponse(game_history)
    except requests.exceptions.RequestException as e:
        # Tratamento de erro
        error_message = "Ocorreu um erro na requisição: " + str(e)
        return JsonResponse({'error': error_message}, status=500)
