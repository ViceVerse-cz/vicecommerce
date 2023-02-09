import { g as x } from "./index-4c5f9ec7.js";
function _(m, w) {
  for (var f = 0; f < w.length; f++) {
    const l = w[f];
    if (typeof l !== "string" && !Array.isArray(l)) {
      for (const s in l)
        if (s !== "default" && !(s in m)) {
          const i = Object.getOwnPropertyDescriptor(l, s);
          i && Object.defineProperty(m, s, i.get ? i : { enumerable: !0, get: () => l[s] });
        }
    }
  }
  return Object.freeze(Object.defineProperty(m, Symbol.toStringTag, { value: "Module" }));
}
var S = {};
var I = {
    get exports() {
      return S;
    },
    set exports(m) {
      S = m;
    },
  };
(function (m, w) {
  (function (f, l) {
    m.exports = l();
  })(window, function () {
    return (function (f) {
      var l = {};
      function s(i) {
        if (l[i]) return l[i].exports;
        var u = (l[i] = { i, l: !1, exports: {} });
        return f[i].call(u.exports, u, u.exports, s), (u.l = !0), u.exports;
      }
      return (
        (s.m = f),
        (s.c = l),
        (s.d = function (i, u, c) {
          s.o(i, u) || Object.defineProperty(i, u, { enumerable: !0, get: c });
        }),
        (s.r = function (i) {
          typeof Symbol < "u" &&
            Symbol.toStringTag &&
            Object.defineProperty(i, Symbol.toStringTag, { value: "Module" }),
            Object.defineProperty(i, "__esModule", { value: !0 });
        }),
        (s.t = function (i, u) {
          if ((1 & u && (i = s(i)), 8 & u || (4 & u && typeof i === "object" && i && i.__esModule))) return i;
          var c = Object.create(null);
          if (
            (s.r(c), Object.defineProperty(c, "default", { enumerable: !0, value: i }), 2 & u && typeof i !== "string")
          )
            for (var d in i)
              s.d(
                c,
                d,
                function (p) {
                  return i[p];
                }.bind(null, d),
              );
          return c;
        }),
        (s.n = function (i) {
          var u =
            i?.__esModule
              ? function () {
                  return i.default;
                }
              : function () {
                  return i;
                };
          return s.d(u, "a", u), u;
        }),
        (s.o = function (i, u) {
          return Object.prototype.hasOwnProperty.call(i, u);
        }),
        (s.p = ""),
        s((s.s = 2))
      );
    })([
      function (f, l, s) {
        s.r(l);
        var i =
          typeof fetch === "function"
            ? fetch.bind()
            : function (u, c) {
                return (
                  (c = c || {}),
                  new Promise(function (d, p) {
                    var r = new XMLHttpRequest();
                    for (var a in (r.open(c.method || "get", u, !0), c.headers)) r.setRequestHeader(a, c.headers[a]);
                    function t() {
                      var e;
                      var n = [];
                      var o = [];
                      var h = {};
                      return (
                        r.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm, function (y, k, b) {
                          n.push((k = k.toLowerCase())), o.push([k, b]), (e = h[k]), (h[k] = e ? `${e},${b}` : b);
                        }),
                        {
                          ok: ((r.status / 100) | 0) === 2,
                          status: r.status,
                          statusText: r.statusText,
                          url: r.responseURL,
                          clone: t,
                          text: function () {
                            return Promise.resolve(r.responseText);
                          },
                          json: function () {
                            return Promise.resolve(r.responseText).then(JSON.parse);
                          },
                          blob: function () {
                            return Promise.resolve(new Blob([r.response]));
                          },
                          headers: {
                            keys: function () {
                              return n;
                            },
                            entries: function () {
                              return o;
                            },
                            get: function (y) {
                              return h[y.toLowerCase()];
                            },
                            has: function (y) {
                              return y.toLowerCase() in h;
                            },
                          },
                        }
                      );
                    }
                    (r.withCredentials = c.credentials === "include"),
                      (r.onload = function () {
                        d(t());
                      }),
                      (r.onerror = p),
                      r.send(c.body);
                  })
                );
              };
        l.default = i;
      },
      function (f, l, s) {
        Object.defineProperty(l, "__esModule", { value: !0 });
        var i = (function () {
            function c(d, p) {
              for (var r = 0; r < p.length; r++) {
                var a = p[r];
                (a.enumerable = a.enumerable || !1),
                  (a.configurable = !0),
                  "value" in a && (a.writable = !0),
                  Object.defineProperty(d, a.key, a);
              }
            }
            return function (d, p, r) {
              return p && c(d.prototype, p), r && c(d, r), d;
            };
          })();
        var u = (function () {
            function c(d, p) {
              (function (r, a) {
                if (!(r instanceof a)) throw new TypeError("Cannot call a class as a function");
              })(this, c),
                (this.pluginName = d);
            }
            return (
              i(c, [
                {
                  key: "track",
                  value: function (d, p) {
                    window.analytics.track(d, p, { integration: { name: this.pluginName } });
                  },
                },
              ]),
              c
            );
          })();
        l.default = u;
      },
      function (f, l, s) {
        Object.defineProperty(l, "__esModule", { value: !0 }), (l.YouTubeAnalytics = l.VimeoAnalytics = void 0);
        var i = c(s(3));
        var u = c(s(4));
        function c(d) {
          return d?.__esModule ? d : { default: d };
        }
        (l.VimeoAnalytics = i.default), (l.YouTubeAnalytics = u.default);
      },
      function (f, l, s) {
        Object.defineProperty(l, "__esModule", { value: !0 });
        var i = (function () {
            function p(r, a) {
              for (var t = 0; t < a.length; t++) {
                var e = a[t];
                (e.enumerable = e.enumerable || !1),
                  (e.configurable = !0),
                  "value" in e && (e.writable = !0),
                  Object.defineProperty(r, e.key, e);
              }
            }
            return function (r, a, t) {
              return a && p(r.prototype, a), t && p(r, t), r;
            };
          })();
        var u = c(s(0));
        function c(p) {
          return p?.__esModule ? p : { default: p };
        }
        var d = (function (p) {
          function r(a, t) {
            (function (n, o) {
              if (!(n instanceof o)) throw new TypeError("Cannot call a class as a function");
            })(this, r);
            var e = (function (n, o) {
              if (!n) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return !o || (typeof o !== "object" && typeof o !== "function") ? n : o;
            })(this, (r.__proto__ || Object.getPrototypeOf(r)).call(this, "VimeoAnalytics"));
            return (
              (e.authToken = t),
              (e.player = a),
              (e.metadata = { content: {}, playback: { videoPlayer: "Vimeo" } }),
              (e.mostRecentHeartbeat = 0),
              (e.isPaused = !1),
              e
            );
          }
          return (
            (function (a, t) {
              if (typeof t !== "function" && t !== null)
                throw new TypeError(`Super expression must either be null or a function, not ${typeof t}`);
              (a.prototype = Object.create(t?.prototype, {
                constructor: { value: a, enumerable: !1, writable: !0, configurable: !0 },
              })),
                t && (Object.setPrototypeOf ? Object.setPrototypeOf(a, t) : (a.__proto__ = t));
            })(r, p),
            i(r, [
              {
                key: "initialize",
                value: function () {
                  var a = this;
                  var t = {
                      loaded: this.retrieveMetadata,
                      play: this.trackPlay,
                      pause: this.trackPause,
                      ended: this.trackEnded,
                      timeupdate: this.trackHeartbeat,
                    };
                  for (var e in t) this.registerHandler(e, t[e]);
                  this.player
                    .getVideoId()
                    .then(function (n) {
                      a.retrieveMetadata({ id: n });
                    })
                    .catch(console.error);
                },
              },
              {
                key: "registerHandler",
                value: function (a, t) {
                  var e = this;
                  this.player.on(a, function (n) {
                    e.updateMetadata(n), t.call(e, n);
                  });
                },
              },
              {
                key: "trackPlay",
                value: function () {
                  this.isPaused
                    ? (this.track("Video Playback Resumed", this.metadata.playback), (this.isPaused = !1))
                    : (this.track("Video Playback Started", this.metadata.playback),
                      this.track("Video Content Started", this.metadata.content));
                },
              },
              {
                key: "trackEnded",
                value: function () {
                  this.track("Video Playback Completed", this.metadata.playback),
                    this.track("Video Content Completed", this.metadata.content);
                },
              },
              {
                key: "trackHeartbeat",
                value: function () {
                  var a = this.mostRecentHeartbeat;
                  var t = this.metadata.playback.position;
                  t !== a &&
                    t - a >= 10 &&
                    (this.track("Video Content Playing", this.metadata.content),
                    (this.mostRecentHeartbeat = Math.floor(t)));
                },
              },
              {
                key: "trackPause",
                value: function () {
                  (this.isPaused = !0), this.track("Video Playback Paused", this.metadata.playback);
                },
              },
              {
                key: "retrieveMetadata",
                value: function (a) {
                  var t = this;
                  return new Promise(function (e, n) {
                    var o = a.id;
                    (0, u.default)(`https://api.vimeo.com/videos/${o}`, {
                      headers: { Authorization: `Bearer ${t.authToken}` },
                    })
                      .then(function (h) {
                        return h.ok ? h.json() : n(h);
                      })
                      .then(function (h) {
                        (t.metadata.content.title = h.name),
                          (t.metadata.content.description = h.description),
                          (t.metadata.content.publisher = h.user.name),
                          (t.metadata.playback.position = 0),
                          (t.metadata.playback.totalLength = h.duration);
                      })
                      .catch(function (h) {
                        return console.error("Request to Vimeo API Failed with: ", h), n(h);
                      });
                  });
                },
              },
              {
                key: "updateMetadata",
                value: function (a) {
                  var t = this;
                  return new Promise(function (e, n) {
                    t.player
                      .getVolume()
                      .then(function (o) {
                        o && (t.metadata.playback.sound = 100 * o), (t.metadata.playback.position = a.seconds), e();
                      })
                      .catch(n);
                  });
                },
              },
            ]),
            r
          );
        })(c(s(1)).default);
        l.default = d;
      },
      function (f, l, s) {
        Object.defineProperty(l, "__esModule", { value: !0 });
        var i = (function () {
            function a(t, e) {
              for (var n = 0; n < e.length; n++) {
                var o = e[n];
                (o.enumerable = o.enumerable || !1),
                  (o.configurable = !0),
                  "value" in o && (o.writable = !0),
                  Object.defineProperty(t, o.key, o);
              }
            }
            return function (t, e, n) {
              return e && a(t.prototype, e), n && a(t, n), t;
            };
          })();
        var u = d(s(0));
        var c = d(s(1));
        function d(a) {
          return a?.__esModule ? a : { default: a };
        }
        var p = (function (a) {
          function t(e, n) {
            (function (h, y) {
              if (!(h instanceof y)) throw new TypeError("Cannot call a class as a function");
            })(this, t);
            var o = (function (h, y) {
              if (!h) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return !y || (typeof y !== "object" && typeof y !== "function") ? h : y;
            })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, "YoutubeAnalytics"));
            return (
              (o.player = e),
              (o.apiKey = n),
              (o.playerLoaded = !1),
              (o.playbackStarted = !1),
              (o.contentStarted = !1),
              (o.isPaused = !1),
              (o.isBuffering = !1),
              (o.isSeeking = !1),
              (o.lastRecordedTime = { timeReported: Date.now(), timeElapsed: 0 }),
              (o.metadata = [{ playback: { video_player: "youtube" }, content: {} }]),
              (o.playlistIndex = 0),
              o
            );
          }
          return (
            (function (e, n) {
              if (typeof n !== "function" && n !== null)
                throw new TypeError(`Super expression must either be null or a function, not ${typeof n}`);
              (e.prototype = Object.create(n?.prototype, {
                constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
              })),
                n && (Object.setPrototypeOf ? Object.setPrototypeOf(e, n) : (e.__proto__ = n));
            })(t, a),
            i(t, [
              {
                key: "initialize",
                value: function () {
                  (window.segmentYoutubeOnStateChange = this.onPlayerStateChange.bind(this)),
                    (window.segmentYoutubeOnReady = this.onPlayerReady.bind(this)),
                    this.player.addEventListener("onReady", "segmentYoutubeOnReady"),
                    this.player.addEventListener("onStateChange", "segmentYoutubeOnStateChange");
                },
              },
              {
                key: "onPlayerReady",
                value: function (e) {
                  this.retrieveMetadata();
                },
              },
              {
                key: "onPlayerStateChange",
                value: function (e) {
                  var n = this.player.getCurrentTime();
                  switch (
                    (this.metadata[this.playlistIndex] &&
                      ((this.metadata[this.playlistIndex].playback.position = this.metadata[
                        this.playlistIndex
                      ].content.position =
                        n),
                      (this.metadata[this.playlistIndex].playback.quality = this.player.getPlaybackQuality()),
                      (this.metadata[this.playlistIndex].playback.sound = this.player.isMuted()
                        ? 0
                        : this.player.getVolume())),
                    e.data)
                  ) {
                    case -1:
                      if (this.playerLoaded) break;
                      this.retrieveMetadata(), (this.playerLoaded = !0);
                      break;
                    case YT.PlayerState.BUFFERING:
                      this.handleBuffer();
                      break;
                    case YT.PlayerState.PLAYING:
                      this.handlePlay();
                      break;
                    case YT.PlayerState.PAUSED:
                      this.handlePause();
                      break;
                    case YT.PlayerState.ENDED:
                      this.handleEnd();
                  }
                  this.lastRecordedTime = { timeReported: Date.now(), timeElapsed: 1e3 * this.player.getCurrentTime() };
                },
              },
              {
                key: "retrieveMetadata",
                value: function () {
                  var e = this;
                  return new Promise(function (n, o) {
                    var h = e.player.getVideoData();
                    var y = e.player.getPlaylist() || [h.video_id];
                    var k = y.join();
                    (0, u.default)(
                      `https://www.googleapis.com/youtube/v3/videos?id=${k}&part=snippet,contentDetails&key=${e.apiKey}`,
                    )
                      .then(function (b) {
                        if (!b.ok) {
                          var P = new Error(
                            "Segment request to Youtube API failed (likely due to a bad API Key. Events will still be sent but will not contain video metadata)",
                          );
                          throw ((P.response = b), P);
                        }
                        return b.json();
                      })
                      .then(function (b) {
                        e.metadata = [];
                        for (var P = 0, v = 0; v < y.length; v++) {
                          var g = b.items[v];
                          e.metadata.push({
                            content: {
                              title: g.snippet.title,
                              description: g.snippet.description,
                              keywords: g.snippet.tags,
                              channel: g.snippet.channelTitle,
                              airdate: g.snippet.publishedAt,
                            },
                          }),
                            (P += r(g.contentDetails.duration));
                        }
                        for (v = 0; v < y.length; v++)
                          e.metadata[v].playback = { total_length: P, video_player: "youtube" };
                        n();
                      })
                      .catch(function (b) {
                        (e.metadata = y.map(function (P) {
                          return { playback: { video_player: "youtube" }, content: {} };
                        })),
                          o(b);
                      });
                  });
                },
              },
              {
                key: "handleBuffer",
                value: function () {
                  var e = this.determineSeek();
                  this.playbackStarted ||
                    ((this.playbackStarted = !0),
                    this.track("Video Playback Started", this.metadata[this.playlistIndex].playback)),
                    e &&
                      !this.isSeeking &&
                      ((this.isSeeking = !0),
                      this.track("Video Playback Seek Started", this.metadata[this.playlistIndex].playback)),
                    this.isSeeking &&
                      (this.track("Video Playback Seek Completed", this.metadata[this.playlistIndex].playback),
                      (this.isSeeking = !1));
                  var n = this.player.getPlaylist();
                  n &&
                    this.player.getCurrentTime() === 0 &&
                    this.player.getPlaylistIndex() !== this.playlistIndex &&
                    ((this.contentStarted = !1),
                    this.playlistIndex === n.length - 1 &&
                      this.player.getPlaylistIndex() === 0 &&
                      (this.track("Video Playback Completed", this.metadata[this.player.getPlaylistIndex()].playback),
                      this.track("Video Playback Started", this.metadata[this.player.getPlaylistIndex()].playback))),
                    this.track("Video Playback Buffer Started", this.metadata[this.playlistIndex].playback),
                    (this.isBuffering = !0);
                },
              },
              {
                key: "handlePlay",
                value: function () {
                  this.contentStarted ||
                    ((this.playlistIndex = this.player.getPlaylistIndex()),
                    this.playlistIndex === -1 && (this.playlistIndex = 0),
                    this.track("Video Content Started", this.metadata[this.playlistIndex].content),
                    (this.contentStarted = !0)),
                    this.isBuffering &&
                      (this.track("Video Playback Buffer Completed", this.metadata[this.playlistIndex].playback),
                      (this.isBuffering = !1)),
                    this.isPaused &&
                      (this.track("Video Playback Resumed", this.metadata[this.playlistIndex].playback),
                      (this.isPaused = !1));
                },
              },
              {
                key: "handlePause",
                value: function () {
                  var e = this.determineSeek();
                  this.isBuffering &&
                    (this.track("Video Playback Buffer Completed", this.metadata[this.playlistIndex].playback),
                    (this.isBuffering = !1)),
                    this.isPaused ||
                      (e
                        ? (this.track("Video Playback Seek Started", this.metadata[this.playlistIndex].playback),
                          (this.isSeeking = !0))
                        : (this.track("Video Playback Paused", this.metadata[this.playlistIndex].playback),
                          (this.isPaused = !0)));
                },
              },
              {
                key: "handleEnd",
                value: function () {
                  this.track("Video Content Completed", this.metadata[this.playlistIndex].content),
                    (this.contentStarted = !1);
                  var e = this.player.getPlaylistIndex();
                  var n = this.player.getPlaylist();
                  ((n && e === n.length - 1) || e === -1) &&
                    (this.track("Video Playback Completed", this.metadata[this.playlistIndex].playback),
                    (this.playbackStarted = !1));
                },
              },
              {
                key: "determineSeek",
                value: function () {
                  var e = this.isPaused || this.isBuffering ? 0 : Date.now() - this.lastRecordedTime.timeReported;
                  var n = 1e3 * this.player.getCurrentTime() - this.lastRecordedTime.timeElapsed;
                  return Math.abs(e - n) > 2e3;
                },
              },
            ]),
            t
          );
        })(c.default);
        function r(a) {
          var t = a.match(/PT(\d+H)?(\d+M)?(\d+S)?/);
          return (
            (t = t.slice(1).map(function (e) {
              if (e != null) return e.replace(/\D/, "");
            })),
            3600 * (parseInt(t[0]) || 0) + 60 * (parseInt(t[1]) || 0) + (parseInt(t[2]) || 0)
          );
        }
        l.default = p;
      },
    ]);
  });
})(I);
const O = x(S);
const C = _({ __proto__: null, default: O }, [S]);
export { C as i };
