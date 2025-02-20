import SvgIcon from "@mui/material/SvgIcon";

export default function GSKDesignIcon() {
  return (
    <SvgIcon sx={{ height: 21, width: 250, mr: 2 }}>
      <svg
        width={250}
        height={21}
        viewBox="0 0 380 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Text "GSK Design" */}
        <text
          x="0"
          y="15"
          fontFamily="Dancing Script, serif"
          fontSize="35"
          fontWeight="bold"
          fill="#000000"
        >
          GSK Design
        </text>
      </svg>
    </SvgIcon>
  );
}
