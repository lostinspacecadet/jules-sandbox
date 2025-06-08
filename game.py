import random

def play_guessing_game():
    """Plays a number guessing game with the user."""
    secret_number = random.randint(1, 100)
    max_attempts = 7
    attempts_left = max_attempts

    print("Welcome to the Number Guessing Game!")
    print(f"I'm thinking of a number between 1 and 100. You have {max_attempts} attempts.")

    while attempts_left > 0:
        try:
            guess = int(input(f"Attempts left: {attempts_left}. Enter your guess: "))
        except ValueError:
            print("Invalid input. Please enter a number.")
            continue

        if guess < secret_number:
            print("Too low!")
        elif guess > secret_number:
            print("Too high!")
        else:
            print(f"Correct! You guessed the number {secret_number}!")
            return

        attempts_left -= 1

    print(f"Sorry, you've run out of attempts. The number was {secret_number}.")

if __name__ == "__main__":
    play_guessing_game()
