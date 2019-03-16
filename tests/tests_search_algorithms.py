from unittest import TestCase
from python_src.search_algorithms import linearSearch, binarySearch

numbers = [82, 9, 6, 16, 5, 70, 63, 64, 59, 72, 30, 10, 26, 77, 64, 11, 10, 7, 66, 59, 55, 76, 13, 38, 19, 68, 60, 42, 7, 51]

class LinearSearch(TestCase):
    def test_linear_search_in_first_element(self):
        self.assertEqual(0, linearSearch(numbers=numbers, item=82))
    
    def test_linear_search_in_last_element(self):
        self.assertEqual(29, linearSearch(numbers=numbers, item=51))
    
    def test_linear_search_in_element_not_exists(self):
        self.assertEqual(-1, linearSearch(numbers=numbers, item=100))
    

class BinarySearch(TestCase):
    def test_binary_search_in_first_element(self):
        self.assertEqual(29, binarySearch(numbers=numbers, item=82))
        # pass
    
    def test_binary_search_in_last_element(self):
        self.assertEqual(15, binarySearch(numbers=numbers, item=51))
        # pass
    
    def test_binary_search_in_element_not_exists(self):
        self.assertEqual(-1, binarySearch(numbers=numbers, item=100))
        # pass
