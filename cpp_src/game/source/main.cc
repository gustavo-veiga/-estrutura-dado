#include <GLFW/glfw3.h>

#include <iostream>

static void key_callback(GLFWwindow* window, int key, int scancode, int action, int mods) {
  if (key == GLFW_KEY_ESCAPE && action == GLFW_PRESS) glfwSetWindowShouldClose(window, GLFW_TRUE);
}

int main() {
  // Initialize the library
  if (!glfwInit()) return -1;

  // Primary monitor
  const auto monitor = glfwGetPrimaryMonitor();

  // Windowed full screen
  const auto mode = glfwGetVideoMode(monitor);
  glfwWindowHint(GLFW_RED_BITS, mode->redBits);
  glfwWindowHint(GLFW_GREEN_BITS, mode->greenBits);
  glfwWindowHint(GLFW_BLUE_BITS, mode->blueBits);
  glfwWindowHint(GLFW_REFRESH_RATE, mode->refreshRate);

  // Create a windowed mode window and its OpenGL context
  auto window = glfwCreateWindow(mode->width, mode->height, "Hello World", NULL, NULL);
  if (!window) {
    glfwTerminate();
    return -1;
  }

  // Make the window's context current
  glfwMakeContextCurrent(window);

  // Loop until the user closes the window
  while (!glfwWindowShouldClose(window)) {
    // Swap front and back buffers
    glfwSwapBuffers(window);

    // Poll for and process events
    glfwPollEvents();

    glfwSetKeyCallback(window, key_callback);
  }

  glfwTerminate();

  return EXIT_SUCCESS;
}
