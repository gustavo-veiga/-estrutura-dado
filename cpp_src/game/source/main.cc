#include <allegro5/allegro5.h>

int main(int argc, char const *argv[])
{
  // Init Allegro
  al_init();

  // Create window
  auto window = al_create_display(640, 800);

  al_clear_to_color(al_map_rgb(255, 255, 255));
  al_flip_display();
  al_rest(10.0);
  al_destroy_display(window);

  return 0;
}
