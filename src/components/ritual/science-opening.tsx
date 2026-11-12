import { useRef } from "react";
import { ArrowUpRight, Film, Play, X } from "lucide-react";
import styles from "./science-opening.module.css";

export const scienceProject = "Why do rockets launch east?";

const footage = "/brand/ritual/workspaces/starship-liftoff.mp4";
const poster = "/brand/ritual/workspaces/starship-liftoff.jpg";
const archive = "https://commons.wikimedia.org/wiki/File:SpaceX_Starship_integrated_flight_test_-5_-_launch_and_catch_-_13_October_2024.webm";
const nasaNote = "https://spaceplace.nasa.gov/launch-windows/en/";

export function ScienceOpening() {
  const dialog = useRef<HTMLDialogElement>(null);
  const video = useRef<HTMLVideoElement>(null);

  return (
    <>
      <button
        className={styles.clip}
        type="button"
        aria-haspopup="dialog"
        aria-controls="science-opening"
        onClick={() => dialog.current?.showModal()}
      >
        <span className={styles.clipBar}><Film size={13} aria-hidden="true" /> <span>Starship liftoff</span></span>
        <span className={styles.clipImage}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={poster} alt="" width={960} height={540} />
          <span className={styles.play}><Play size={17} fill="currentColor" aria-hidden="true" /></span>
        </span>
        <span className={styles.clipFooter}>SpaceX flight test <ArrowUpRight size={13} aria-hidden="true" /></span>
      </button>

      <dialog
        className={styles.dialog}
        id="science-opening"
        ref={dialog}
        aria-labelledby="science-opening-title"
        onClose={() => video.current?.pause()}
        onClick={(event) => {
          if (event.target === event.currentTarget) dialog.current?.close();
        }}
      >
        <div className={styles.editor}>
          <header className={styles.header}>
            <div>
              <p>Science explainer workspace</p>
              <h2 id="science-opening-title">{scienceProject}</h2>
            </div>
            <button
              className={styles.close}
              type="button"
              aria-label="Close opening workspace"
              onClick={() => dialog.current?.close()}
            >
              <X size={19} aria-hidden="true" />
            </button>
          </header>

          <div className={styles.panels}>
            <section className={styles.source} aria-labelledby="science-shot">
              <div className={styles.panelHeading}>
                <h3 id="science-shot">Opening shot</h3>
                <span>00:00–00:08</span>
              </div>
              <video
                ref={video}
                src={footage}
                poster={poster}
                controls
                playsInline
                preload="none"
                aria-label="Eight seconds of Starship liftoff"
              />
              <p className={styles.shotNote}>Hold the wide shot as Starship clears the tower.</p>
              <p className={styles.credit}>
                <a href={archive} target="_blank" rel="noreferrer">Footage by Anne Toal</a>
                {" · "}
                <a href="https://creativecommons.org/licenses/by/3.0/" target="_blank" rel="noreferrer">CC BY 3.0</a>
                {" · Trimmed, no audio"}
              </p>
            </section>

            <section className={styles.draft} aria-labelledby="science-voiceover">
              <div className={styles.panelHeading}>
                <h3 id="science-voiceover">Opening script</h3>
                <span>Sample draft</span>
              </div>
              <label htmlFor="science-voiceover-text">Voiceover over liftoff</label>
              <textarea
                id="science-voiceover-text"
                rows={4}
                defaultValue="Before its engines even fire, this rocket is already moving. So are you. The whole planet is turning under the launchpad."
              />
              <div className={styles.editNote}>
                <span>My edit note</span>
                <p>Keep the launch wide through “so are you.” Then cut to a spinning globe.</p>
              </div>
              <a className={styles.fact} href={nasaNote} target="_blank" rel="noreferrer">
                NASA · Launch a rocket from a spinning planet <ArrowUpRight size={14} aria-hidden="true" />
              </a>
            </section>
          </div>
        </div>
      </dialog>
    </>
  );
}
