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
        },{id: "dropdown-puzzles",
              title: "puzzles",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/puzzles/";
              },
            },{id: "post-regional-artwork",
        
          title: "Regional Artwork",
        
        description: "Jane Street Puzzle, June 2026",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/Regional-Artwork/";
          
        },
      },{id: "post-can-u-dig-it",
        
          title: "Can U Dig It?",
        
        description: "Jane Street Puzzle, April 2026",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/Can-U-Dig-It/";
          
        },
      },{id: "post-timely-journey",
        
          title: "Timely Journey",
        
        description: "Jane Street Puzzle, January 2026",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/Timely-Journey/";
          
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
      },{id: "news-i-attended-the-northern-virginia-regional-science-fair-winning-the-mathematics-and-computer-science-category",
          title: 'I attended the Northern Virginia Regional Science Fair, winning the Mathematics and Computer...',
          description: "",
          section: "News",},{id: "news-i-attended-the-virginia-state-science-and-engineering-fair-receiving-an-honorable-mention-for-the-leidos-award-for-excellence-in-computational-science",
          title: 'I attended the Virginia State Science and Engineering Fair, receiving an honorable mention...',
          description: "",
          section: "News",},{
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
