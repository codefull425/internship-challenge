from rest_framework.decorators import api_view
from rest_framework.response import Response
from api.services.calculation_service import RangeInput, mmc_interval


@api_view(['POST'])
def calculate(request):
    """
    Espera JSON: { "x": <int>, "y": <int> }
    Retorna: { "result": <int> }
    """
    x = request.data.get('x')
    y = request.data.get('y')

    try:
        x = int(x)
        y = int(y)
        if x <= 0 or y <= 0:
            raise ValueError
        if x > y:
            x, y = y, x  
    except (TypeError, ValueError):
        return Response(
            {"error": "Envie números inteiros positivos válidos para 'x' e 'y'."},
            status=400
        )

    data = RangeInput(x, y)
    result = mmc_interval(data)

    return Response({
        "interval": f"{x} - {y}",
        "result": result
    })