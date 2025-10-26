from math import gcd
from dataclasses import dataclass

@dataclass(frozen=True)
class RangeInput:
    x: int
    y: int

def mmc(a: int, b: int) -> int:
    return abs(a * b) // gcd(a, b)

def mmc_interval(data: RangeInput) -> int:
    result = data.x
    for n in range(data.x + 1, data.y + 1):
        result = mmc(result, n)
    return result