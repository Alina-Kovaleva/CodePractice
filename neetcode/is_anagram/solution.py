from collections import Counter


def is_anagram(self, s: str, t: str) -> bool:
		return Counter(s) == Counter(t)

print(is_anagram("racecar", "carrace")); #Output: true;
print(is_anagram("jar", "jam")); #Output: false;
print(is_anagram("xx", "x")); #Output: false;
print(is_anagram("bbcc", "ccbc")); #Output: true;
