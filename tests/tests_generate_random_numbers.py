from unittest import TestCase
from python_src.helpers import generate_random_numbers


class RandomNumbers(TestCase):
    def test_length_of_list(self):
        numbers = generate_random_numbers(
            len_list=10,
            start=3,
            end=60
        )

        self.assertEqual(10, len(numbers))

    def test_min_number_of_list(self):
        numbers = generate_random_numbers(
            len_list=10,
            start=3,
            end=60
        )

        self.assertTrue(min(numbers) >= 3)
    
    def test_max_number_of_list(self):
        numbers = generate_random_numbers(
            len_list=10,
            start=3,
            end=60
        )

        self.assertTrue(max(numbers) <= 60)
    
    def test_all_values_on_list_is_number(self):
        numbers = generate_random_numbers(
            len_list=10,
            start=3,
            end=60
        )

        self.assertTrue(all([ type(number) is int for number in numbers ]))
