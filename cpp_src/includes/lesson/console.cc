#include "console.h"
#ifdef _WIN32
#include <windows.h>
#elif __linux__
#include <sys/ioctl.h>
#include <unistd.h>
#endif

#ifdef _WIN32

int lesson::console::rows() {
  CONSOLE_SCREEN_BUFFER_INFO csbi;
  GetConsoleScreenBufferInfo(GetStdHandle(STD_OUTPUT_HANDLE), &csbi);
  return csbi.srWindow.Bottom - csbi.srWindow.Top + 1;
}

int lesson::console::columns() {
  CONSOLE_SCREEN_BUFFER_INFO csbi;
  GetConsoleScreenBufferInfo(GetStdHandle(STD_OUTPUT_HANDLE), &csbi);
  return csbi.srWindow.Right - csbi.srWindow.Left + 1;
}

#elif __linux__

int lesson::console::row() {
  struct winsize size;
  ioctl(STDOUT_FILENO, TIOCGWINSZ, &size);
  return size.ws_row;
}

int lesson::console::columns() {
  struct winsize size;
  ioctl(STDOUT_FILENO, TIOCGWINSZ, &size);
  return size.ws_col;
}

#else

int lesson::console::row() {
  return 0;
}

int lesson::console::columns() {
  return 0;
}

#endif
