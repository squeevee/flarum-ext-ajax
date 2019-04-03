# AJAX

Live forum updates using AJAX. No, really.

## Why not Pusher?

Live updates are a feature that can be implemented using local resources and open technologies, without depending on a third-party API. Pusher seems to provide a quality service, and I have no problem with the Pusher extension. However, from a libre perspective I feel like it is important to have an extension like this as an available option.

On a more pragmatic note, with my own Flarum installation, Pusher's least expensive professional plan is several times the cost of my web hosting and domain registration put together. On the sandbox plan, I frequently get messages telling me that I'm approaching my allowed limits, but the traffic is never so high that I anticipate AJAX couldn't perform. I've thus decided to take the matter into my own hands.

## Why not WebSockets?

WebSockets are the standard technology for live web applications. They would have been ideal here as they propagate instanateously, whereas AJAX has unavoidable latency. WebSockets also use less bandwidth, as messages are only sent when there are actual changes to the data. (Though, for the typical Flarum instance I wouldn't expect this to be a huge difference.)

Unfortunately my aforementioned very cheap web hosting plan does not permit me to open incoming network sockets at my whim -- making WebSockets impossible for me to use. And I'm just not altruistic enough to build an extension I can't use.

I am designing this extension such that in the future it (or its successor) could support WebSockets also -- for example, to use WebSockets if it can and AJAX otherwise (which is, as I understand it, roughly how Pusher works). That is, however, only an open door and I am not making it a priority to implement.

## Basic design

### Frontend

The `UpdateDriver` abstract class is responsible for discovering changes to the data and raising an event when this occurs. The `Updater` class uses these events to propagate new data to the UI.

The `AjaxDriver` is an implementation of `UpdateDriver` and uses periodic calls to an HTTP API to poll the server for new data.

### Backend

The `ajax_diff` table tracks changes made several kinds of data over the course of a short period. When polled, the changes that occurred since the last poll are aggregated and sent back as one data set. Changes exceeding a particular age are removed from this table.