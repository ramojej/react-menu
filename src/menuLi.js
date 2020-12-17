import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";

const MenuLi = ({ node }) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <>
      <li>
        {node.title}
        {node.children.length > 0 && (
          <motion.div initial={false} onClick={() => setExpanded(!expanded)}>
            <FiChevronDown />
          </motion.div>
        )}
        <AnimatePresence initial={false}>
          {node.children.length > 0 && expanded && (
            <motion.ul
              className="submenu"
              initial="collapsed"
              animate="open"
              exit="collapsed"
              variants={{
                open: { opacity: 1, height: "auto" },
                collapsed: { opacity: 0, height: 0 },
              }}
              transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
            >
              {node.children.map((submenu, index) => {
                return <li key={index}>{submenu.title}</li>;
              })}
            </motion.ul>
          )}
        </AnimatePresence>
      </li>
    </>
  );
};

export default MenuLi;
