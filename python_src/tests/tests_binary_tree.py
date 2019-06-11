from unittest import TestCase
from estrutura_dados.binary_tree import BinaryTree, Branch


class BinaryTreeTest(TestCase):
    def test_length_of_tree_on_initialized_must_be_empty(self):
        tree = BinaryTree(None)

        self.assertEqual(tree.root, None, 'The Binary Tree not contais one element')

        self.assertTrue(tree.is_empty())
    
    def test_push_root_element(self):
        tree = BinaryTree(None)

        tree.push(10)

        self.assertFalse(tree.is_empty())

        self.assertEqual(tree.root.value, 10)
