// Terminal Module System
const Terminal = (() => {
  const commands = {
    help: {
      desc: "Show available commands",
      handler: () => [
        "Available commands:",
        ...Object.keys(commands).map(
          (cmd) => `- ${cmd}: ${commands[cmd].desc}`
        ),
      ],
    },
    contact: {
      desc: "Show contact information",
      handler: () => [
        "Contact methods:",
        "Email: j3remyz1on@gmail.com",
        "LinkedIn: https://linkedin.com/in/yourprofile",
        "GitHub: https://github.com/CremaCrem",
      ],
    },
    skills: {
      desc: "Navigate to skills section",
      handler: () => {
        document
          .querySelector("#skills")
          .scrollIntoView({ behavior: "smooth" });
        return ["Redirecting to skills section..."];
      },
    },
    projects: {
      desc: "Navigate to projects section",
      handler: () => {
        document
          .querySelector("#projects")
          .scrollIntoView({ behavior: "smooth" });
        return ["Redirecting to projects section..."];
      },
    },
    clear: {
      desc: "Clear terminal history",
      handler: () => {
        TerminalDisplay.clear();
        return [];
      },
    },
    about: {
      desc: "Show about information",
      handler: () => [
        "Jeremy Zion L. Jamer",
        "Full Stack Developer",
        "Experience: 5 years",
        "Specializes in web development and system design",
      ],
    },
  };

  let history = [];
  const MAX_HISTORY = 50;

  return {
    registerCommand: (name, callback) => {
      commands[name] = callback;
    },
    execute: (command) => {
      const [baseCmd, ...args] = command.trim().split(" ");
      const cmd = commands[baseCmd.toLowerCase()];

      history.push(command);
      if (history.length > MAX_HISTORY) history.shift();

      if (!cmd) {
        return [
          `Command not found: ${baseCmd}`,
          'Type "help" for available commands',
        ];
      }

      try {
        return cmd.handler(args);
      } catch (error) {
        return [`Error executing command: ${error.message}`];
      }
    },
    getHistory: () => [...history],
  };
})();

// Terminal Display Manager
const TerminalDisplay = (() => {
  const outputContainer = document.getElementById("terminal-output");

  const createLine = (text) => {
    const line = document.createElement("p");
    line.className = "terminal-line";
    line.textContent = text;
    return line;
  };

  return {
    print: (output) => {
      output.forEach((line) => {
        outputContainer.appendChild(createLine(line));
      });
      outputContainer.scrollTop = outputContainer.scrollHeight;
    },
    clear: () => {
      outputContainer.innerHTML = "";
    },
  };
})();

// Initialize Terminal
document.addEventListener("DOMContentLoaded", () => {
  const terminalInput = document.getElementById("terminal-input");
  let historyIndex = -1;

  // Command Processing
  const processCommand = (command) => {
    TerminalDisplay.print([`> ${command}`]);
    TerminalDisplay.print(Terminal.execute(command));
  };

  // Input Handling
  terminalInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      const command = terminalInput.value.trim();
      if (command) {
        processCommand(command);
      }
      terminalInput.value = "";
      historyIndex = Terminal.getHistory().length;
    }
  });

  // History Navigation
  terminalInput.addEventListener("keydown", (e) => {
    const history = Terminal.getHistory();
    if (e.key === "ArrowUp") {
      historyIndex = Math.max(historyIndex - 1, 0);
      terminalInput.value = history[historyIndex] || "";
    }
    if (e.key === "ArrowDown") {
      historyIndex = Math.min(historyIndex + 1, history.length);
      terminalInput.value = history[historyIndex] || "";
    }
  });

  // Keep input focused
  document.addEventListener("click", (e) => {
    if (e.target.closest(".terminal-container")) {
      terminalInput.focus();
    }
  });

  // Initial help command
  processCommand("help");
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
