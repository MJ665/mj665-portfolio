import os

# Target directory
base_dir = os.path.join("src", "components", "ui")

# List of files
files = [
    "checkbox.tsx",
    "collapsible.tsx",
    "command.tsx",
    "context-menu.tsx",
    "dialog.tsx",
    "drawer.tsx",
    "dropdown-menu.tsx",
    "form.tsx",
    "hover-card.tsx",
    "input-otp.tsx",
    "input.tsx",
    "label.tsx",
    "menubar.tsx",
    "navigation-menu.tsx",
    "pagination.tsx",
    "popover.tsx",
    "progress.tsx",
    "radio-group.tsx",
    "resizable.tsx",
    "scroll-area.tsx",
    "select.tsx",
    "separator.tsx",
    "sheet.tsx",
    "sidebar.tsx",
    "skeleton.tsx",
    "slider.tsx",
    "sonner.tsx",
    "switch.tsx",
    "table.tsx",
    "tabs.tsx",
    "textarea.tsx",
    "toast.tsx",
    "toaster.tsx",
    "toggle-group.tsx",
    "toggle.tsx",
    "tooltip.tsx",
    "use-toast.ts",
]

# Ensure directory exists
os.makedirs(base_dir, exist_ok=True)

# Create files with boilerplate
for file in files:
    file_path = os.path.join(base_dir, file)
    if not os.path.exists(file_path):
        component_name = os.path.splitext(os.path.basename(file))[0]
        # Convert kebab-case to PascalCase for component names
        component_class = "".join(word.capitalize() for word in component_name.split("-"))

        if file.endswith(".ts"):  # hook
            content = f"""// {component_name} hook
export function {component_class}() {{
  // TODO: implement
}}
"""
        else:  # React component
            content = f"""import React from "react";

export function {component_class}() {{
  return (
    <div>{component_name} component</div>
  );
}}
"""

        with open(file_path, "w", encoding="utf-8") as f:
            f.write(content)

        print(f"✅ Created: {file}")
    else:
        print(f"⚠️ Already exists: {file}")

print("🎉 All files created in src/components/ui/")
