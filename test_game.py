import unittest
from unittest.mock import patch
import game # Assuming game.py is in the same directory or accessible via PYTHONPATH

class TestGuessingGame(unittest.TestCase):

    @patch('game.random.randint')
    @patch('builtins.input')
    @patch('builtins.print')
    def test_win_condition(self, mock_print, mock_input, mock_randint):
        """Test if the game correctly identifies a win."""
        mock_randint.return_value = 50  # Secret number
        mock_input.side_effect = ["50"] # Player guesses correctly

        game.play_guessing_game()

        # Check if win message is printed
        mock_print.assert_any_call("Correct! You guessed the number 50!")

    @patch('game.random.randint')
    @patch('builtins.input')
    @patch('builtins.print')
    def test_loss_condition(self, mock_print, mock_input, mock_randint):
        """Test if the game correctly identifies a loss after running out of attempts."""
        mock_randint.return_value = 50  # Secret number
        # Simulate 7 incorrect guesses
        mock_input.side_effect = ["10", "20", "30", "40", "60", "70", "80"]

        game.play_guessing_game()

        # Check if loss message is printed
        mock_print.assert_any_call("Sorry, you've run out of attempts. The number was 50.")

    @patch('game.random.randint')
    @patch('builtins.input')
    @patch('builtins.print')
    def test_too_high_feedback(self, mock_print, mock_input, mock_randint):
        """Test if 'Too high!' feedback works."""
        mock_randint.return_value = 25
        mock_input.side_effect = ["75", "25"] # First guess high, then correct

        game.play_guessing_game()
        mock_print.assert_any_call("Too high!")

    @patch('game.random.randint')
    @patch('builtins.input')
    @patch('builtins.print')
    def test_too_low_feedback(self, mock_print, mock_input, mock_randint):
        """Test if 'Too low!' feedback works."""
        mock_randint.return_value = 75
        mock_input.side_effect = ["25", "75"] # First guess low, then correct

        game.play_guessing_game()
        mock_print.assert_any_call("Too low!")

    @patch('game.random.randint')
    @patch('builtins.input')
    @patch('builtins.print')
    def test_invalid_input_then_win(self, mock_print, mock_input, mock_randint):
        """Test handling of non-numeric input, followed by a correct guess."""
        mock_randint.return_value = 30
        mock_input.side_effect = ["abc", "30"] # Invalid input, then correct guess

        game.play_guessing_game()

        mock_print.assert_any_call("Invalid input. Please enter a number.")
        mock_print.assert_any_call("Correct! You guessed the number 30!")

    @patch('game.random.randint')
    @patch('builtins.input')
    @patch('builtins.print')
    def test_multiple_guesses_then_win(self, mock_print, mock_input, mock_randint):
        """Test a scenario with a few incorrect guesses then a win."""
        mock_randint.return_value = 60
        mock_input.side_effect = ["10", "90", "50", "60"] # Too low, too high, too low, correct

        game.play_guessing_game()

        mock_print.assert_any_call("Too low!")
        mock_print.assert_any_call("Too high!")
        # The second "Too low!" might be optimized out if not careful with print calls,
        # but we are checking for *any* call.
        mock_print.assert_any_call("Correct! You guessed the number 60!")

if __name__ == '__main__':
    unittest.main()
