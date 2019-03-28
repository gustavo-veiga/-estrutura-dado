from unittest import TestCase
from estrutura_dados.search_algorithms import linear_search, binary_search

numbers = [82, 9, 6, 16, 5, 70, 63, 64, 59, 72, 30, 10, 26, 77, 64, 11, 10, 7, 66, 59, 55, 76, 13, 38, 19, 68, 60, 42, 7, 51]

class LinearSearchTest(TestCase):
    def test_linear_search_in_first_element(self):
        self.assertEqual(0, linear_search(numbers=numbers, item=82))
    
    def test_linear_search_in_last_element(self):
        self.assertEqual(29, linear_search(numbers=numbers, item=51))
    
    def test_linear_search_in_element_not_exists(self):
        self.assertEqual(-1, linear_search(numbers=numbers, item=100))
    

class BinarySearchTest(TestCase):
    def test_binary_search_in_first_element(self):
        self.assertEqual(29, binary_search(numbers=numbers, item=82))
    
    def test_binary_search_in_last_element(self):
        self.assertEqual(15, binary_search(numbers=numbers, item=51))
    
    def test_binary_search_in_element_not_exists(self):
        self.assertEqual(-1, binary_search(numbers=numbers, item=100))
