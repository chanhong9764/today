import requests


def spell_check(content: str):

    response = requests.get("https://mora-bot.kr/api/v1/grammar?string=" + content)
    result = response.json()

    if result['status'] == 200:
        print(result)
        if(result['errnum'] > 0) :
            print(result['suggestions'][0])
    else:
        print(f"Error Code: {response.errorcode}")
