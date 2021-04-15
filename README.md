# React Tutorial Refresher
For 320 class, I presented React code but did not explain concepts well. This tutorial is to refresh/expand my knowledge.
- Followed tutorial to build React ToDo List project here: [https://www.freecodecamp.org/news/react-tutorial-build-a-project/](https://www.freecodecamp.org/news/
react-tutorial-build-a-project/)
- Learned Responsive & Progressive video loading in React here: (https://frontend-digest.com/responsive-and-progressive-video-loading-in-react-e8753315af51)[https://frontend-digest.com/responsive-and-progressive-video-loading-in-react-e8753315af51]
- Installed VLC Media Player here: [https://www.videolan.org/vlc/](https://www.videolan.org/vlc/)

## Notes
#### React Keys
If we were to update a todo's text or done value, the key is what tells React which todo item needs to be updated.
#### React refs and useRef
- To perform common actions such as clearing out an input's value or focusing our input we can use what's called a ref.
- using inputRef, we create a reference to our input element to access wherever we like
- within handleAddTodo function, we can access property inputRef.current & can mutate it directly
- we use it to automatically clear input here

#### OVERALL
- learned window.confirm for dialog prompt
- reorder to have container component at top w/ presentation components below
- learned to pass setState down & just use that hook to update state for all components (as it bubbles up)

## Preparing Videos for Loading

Got source video from online Twitter downloader tool - src: [https://twitter.com/kaynimatic/status/1381543495572197376](https://twitter.com/kaynimatic/status/1381543495572197376)
- Used VLC Media Player to get thumbnail
    - open media in VLC
    - `Shift + S` to save file into `C:/Users/<user>/Picture`
- Converted video from original to 720p & 480p
  - VLC Media Player with tutorial from here: [https://videoconverter.wondershare.com/compress/make-vlc-resize-video.html](https://videoconverter.wondershare.com/compress/make-vlc-resize-video.html).
  - Conversion Settings below:
    - Profile - `Video - H.264 + MP3 (MP4)`
    - Resolution Width - `480px or 720px` (leave Resolution Height as auto)
- Saved all videos & image into `src/assets` & imported them into App.js