// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "A growing collection of your cool projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "post-test-post",
        
          title: "Test Post",
        
        description: "Testing Giscus Comments",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/Test-Post/";
          
        },
      },{id: "post-robot-javelin",
        
          title: "Robot Javelin",
        
        description: "Jane Street Puzzle, December 2025",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/Robot-Javelin/";
          
        },
      },{id: "post-dogs-playing-poker",
        
          title: "Dogs Playing Poker",
        
        description: "Jane Street Puzzle, August 2025",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/Dogs-Playing-Poker/";
          
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
