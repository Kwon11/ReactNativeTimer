PlexChat MultiTimer
===================


Summary
-------

This is a timer app for keeping track of various in-game clocks, such as respawns, party quests, and daily rewards. It allows multiple timers with custom labels.

How much time
-------------
 *  **(3 hours) Set Up:** Pretty painful. Expo would not work on the library wifi, so I had to download the Android SDK to get a "Hello World."
 *  **(2 hours) Composite Components:** I still haven't figured out the build path, and how to get it to include .jsx. It isn't necessary, but it ate a lot of my time to find out that .js works just fine.
 *  **(1 hours) Design/Scaffolding:** What I would consider my "start"
 *  **(6 hours) Create!:** The challenges were in keeping track of timers without Redux, such that the <Timers /> read from the root component state. I could not think of a way to have the timers keep their own state without resetting them on a new timer. I figured if the main component had to keep track of the timers anyway I should set up the Timers to read from that state.

Future
------
 * I want to set up the EditPreset view as I originally intended. That button will lead to a new page where users could see and set their saved timers, and have it show up on the main view from the start
 * Pause, reset, and set-to-repeat options for each timer

Much later future
-----------------
 * Alarms that alert Plexes when its at pre-set times ("5 min till PQ resets!")
 * Authentication/Rank for setting timers
 * Backend support. Give each timer a uniqueID similar to how PlexChat shares chatrooms, so that unaffliated groups could easily coordinate without sharing a room.