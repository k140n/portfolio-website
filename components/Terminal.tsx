"use client";

import { useState, useEffect, useRef } from "react";
import { profile } from "@/data/profile";
import { skills } from "@/data/skills";
import { projects } from "@/data/projects";

const initialDemoSequence = [
  { cmd: "whoami", output: `${profile.name} — ${profile.role}` },
  { cmd: "interests", output: profile.interests.join(", ") },
];

export function Terminal() {
  const [history, setHistory] = useState<Array<{ type: "cmd" | "out" | "hint"; text: string }>>([]);
  const [inputValue, setInputValue] = useState("");
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);
  const [isInteractive, setIsInteractive] = useState(false);
  
  // Auto-typing animation state
  const [demoStep, setDemoStep] = useState(0);
  const [typingCharIndex, setTypingCharIndex] = useState(0);

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll ONLY inside the terminal container without moving the browser window
  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = scrollContainerRef.current.scrollHeight;
    }
  }, [history, demoStep]);

  // Initial typing animation
  useEffect(() => {
    if (demoStep >= initialDemoSequence.length) {
      if (!isInteractive) {
        const timeout = setTimeout(() => {
          setIsInteractive(true);
          setHistory((prev) => [
            ...prev,
            { type: "hint", text: "💡 Tip: Try typing 'help', 'skills', 'projects', or 'contact'" },
          ]);
        }, 0);
        return () => clearTimeout(timeout);
      }
      return;
    }

    const currentItem = initialDemoSequence[demoStep];

    if (typingCharIndex < currentItem.cmd.length) {
      const timeout = setTimeout(() => {
        setTypingCharIndex((prev) => prev + 1);
      }, 70 + Math.random() * 40);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setHistory((prev) => [
          ...prev,
          { type: "cmd", text: currentItem.cmd },
          { type: "out", text: currentItem.output },
        ]);
        setDemoStep((prev) => prev + 1);
        setTypingCharIndex(0);
      }, 400);
      return () => clearTimeout(timeout);
    }
  }, [demoStep, typingCharIndex, isInteractive]);

  // Execute terminal command
  const handleCommand = (rawCmd: string) => {
    const cmd = rawCmd.trim().toLowerCase();
    if (!cmd) return;

    setCommandHistory((prev) => [...prev, rawCmd]);
    setHistoryIndex(-1);

    const newHistory: Array<{ type: "cmd" | "out" | "hint"; text: string }> = [
      ...history,
      { type: "cmd", text: rawCmd },
    ];

    switch (cmd) {
      case "help":
        newHistory.push({
          type: "out",
          text: `Available commands:
  • whoami    - About me
  • skills    - Technical skillset
  • projects  - Featured projects
  • contact   - Contact information & links
  • interests - Areas of interest
  • clear     - Clear terminal screen
  • date      - Current system date`,
        });
        break;

      case "whoami":
        newHistory.push({
          type: "out",
          text: `${profile.name}\nRole: ${profile.role}\nBio: ${profile.bio}\nLocation: ${profile.contact.location}`,
        });
        break;

      case "skills": {
        const skillsList = skills
          .map((s) => `[${s.category}]: ${s.items.join(", ")}`)
          .join("\n");
        newHistory.push({ type: "out", text: skillsList });
        break;
      }

      case "projects": {
        const projectList = projects
          .map((p) => `• ${p.title} (${p.techStack.join(", ")})`)
          .join("\n");
        newHistory.push({
          type: "out",
          text: `Featured Projects:\n${projectList}\n\nScroll down to the Projects section to explore details!`,
        });
        break;
      }

      case "contact":
        newHistory.push({
          type: "out",
          text: `Email: ${profile.contact.email}\nGitHub: ${profile.contact.github}\nLinkedIn: ${profile.contact.linkedin}`,
        });
        break;

      case "interests":
        newHistory.push({
          type: "out",
          text: profile.interests.join("\n"),
        });
        break;

      case "clear":
        setHistory([]);
        setInputValue("");
        return;

      case "sudo":
        newHistory.push({
          type: "out",
          text: "Permission denied: Nice try! With great power comes great responsibility.",
        });
        break;

      case "date":
        newHistory.push({
          type: "out",
          text: new Date().toString(),
        });
        break;

      default:
        newHistory.push({
          type: "out",
          text: `bash: command not found: ${rawCmd}. Type 'help' for available commands.`,
        });
        break;
    }

    setHistory(newHistory);
    setInputValue("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleCommand(inputValue);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (commandHistory.length === 0) return;
      const nextIndex = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1);
      setHistoryIndex(nextIndex);
      setInputValue(commandHistory[nextIndex]);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex === -1) return;
      const nextIndex = historyIndex + 1;
      if (nextIndex >= commandHistory.length) {
        setHistoryIndex(-1);
        setInputValue("");
      } else {
        setHistoryIndex(nextIndex);
        setInputValue(commandHistory[nextIndex]);
      }
    }
  };

  const focusInput = () => {
    if (isInteractive) {
      inputRef.current?.focus();
    }
  };

  return (
    <div
      onClick={focusInput}
      className="w-full max-w-lg rounded-xl overflow-hidden glass shadow-2xl border border-white/10 font-mono text-xs sm:text-sm bg-neutral-950/80 backdrop-blur-md cursor-text transition-all duration-300 hover:border-white/20"
    >
      {/* Header bar */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-white/5 select-none">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80 hover:opacity-100 cursor-pointer" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80 hover:opacity-100 cursor-pointer" />
          <div className="w-3 h-3 rounded-full bg-green-500/80 hover:opacity-100 cursor-pointer" />
        </div>
        <div className="text-xs text-neutral-400 font-mono">terminal - kiran@dev</div>
        <div className="text-[10px] text-emerald-400 uppercase tracking-wider bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
          {isInteractive ? "Interactive" : "Initializing"}
        </div>
      </div>

      {/* Terminal Body */}
      <div 
        ref={scrollContainerRef}
        className="p-4 h-[280px] overflow-y-auto flex flex-col justify-start scrollbar-thin scrollbar-thumb-white/10"
      >
        <div className="flex flex-col gap-2.5 w-full">
          {history.map((item, i) => (
            <div key={i} className="flex flex-col">
              {item.type === "cmd" ? (
                <div className="flex items-center gap-2 text-white font-medium">
                  <span className="text-emerald-400 select-none">$</span>
                  <span>{item.text}</span>
                </div>
              ) : item.type === "hint" ? (
                <div className="text-amber-400/90 text-xs italic py-1 select-none">
                  {item.text}
                </div>
              ) : (
                <div className="text-neutral-300 whitespace-pre-line pl-3 border-l-2 border-emerald-500/30 ml-1 py-0.5 leading-relaxed">
                  {item.text}
                </div>
              )}
            </div>
          ))}

          {/* Initial Auto Typing Stage */}
          {!isInteractive && demoStep < initialDemoSequence.length && (
            <div className="flex items-center gap-2 text-white">
              <span className="text-emerald-400 select-none">$</span>
              <span>
                {initialDemoSequence[demoStep].cmd.substring(0, typingCharIndex)}
              </span>
              <span className="w-2 h-4 bg-emerald-400 inline-block animate-pulse" />
            </div>
          )}

          {/* User Interactive Input Stage */}
          {isInteractive && (
            <div className="flex items-center gap-2 text-white mt-1">
              <span className="text-emerald-400 select-none font-bold">$</span>
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="type a command..."
                className="flex-1 bg-transparent text-white focus:outline-none placeholder:text-neutral-600 font-mono text-xs sm:text-sm caret-emerald-400"
                autoComplete="off"
                spellCheck="false"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
