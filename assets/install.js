// Installation guide content, based on the soft stone installation manual (施工手册).
// Each tab holds groups; each group holds steps with a photo in images/install/.
window.INSTALL_GUIDE = {
  facts: [
    ["≥ 200 mm", "Minimum radius when rolling a sheet"],
    ["15 °C", "Below this, sheets stiffen: handle gently"],
    ["25 kg + 1.5 L", "Adhesive A + B, never add water"],
    ["90%", "Minimum adhesive coverage behind each sheet"],
    ["2 mm", "Joint gap between sheets"],
    ["Top edge", "The only place to nail"],
  ],
  tools: [
    "Electric mixer & 10 L bucket", "Spatula", "Tape measure", "Chalk line", "Table saw or handheld cutter",
    "Angle grinder", "Notched trowel", "Flat tamping board", "Nail gun", "Utility blade",
    "Colour-matched filler & grout", "Pigment", "Fine brush & acrylic paint", "Masking tape", "Jointing tool",
    "Dry sponge", "Corner guards & protective film", "Rope, handcart & EPE foam",
  ],
  tabs: [
    {
      id: "prepare",
      label: "Before you start",
      groups: [
        {
          en: "Handling large sheets", zh: "大板搬运",
          steps: [
            ["handling-1", "Roll it up", "卷起", "After removing the wooden pallet, keep the face side up and roll the sheet along its long edge. The roll radius must be at least 200 mm."],
            ["handling-2", "Tie the roll", "绳子捆绑", "Secure the roll with rope."],
            ["handling-3", "Move it on a trolley", "推车运输", "Take it to the work area on a handcart."],
            ["handling-4", "Lift, don't drag", "不可拖拽", "Once untied, always lift the sheet to move it. Dragging scratches the surface."],
            ["handling-5", "Store flat", "平放保存", "Lay sheets flat with a layer of EPE (pearl cotton) foam between each one."],
          ],
          note: "Cold weather: below 15 °C the sheets become less flexible. Roll, unroll and handle them gently to avoid cracking, and let them lie flat at room temperature until they are completely level before installing.",
        },
        {
          en: "Mixing the adhesive", zh: "专用粘结剂使用",
          intro: "The two-part adhesive comes pre-measured: one 25 kg bag of A powder (contains quartz sand) to one 1.5 L pail of B emulsion. Once mixed it is ready to use. Never add water.",
          steps: [
            ["adhesive-1", "Check the kit", "准备材料", "25 kg bag of A powder, 1.5 L pail of B emulsion and a 10 L mixing bucket."],
            ["adhesive-2", "Add emulsion B", "倒入B乳液", "Pour emulsion B into the bucket and scrape the bottle clean with a spatula."],
            ["adhesive-3", "Add powder A", "倒入A干粉", "Pour the A powder into the bucket."],
            ["adhesive-4", "Machine-mix for 15 minutes", "电动搅拌15分钟", "Mix with an electric mixer for 15 minutes until completely smooth. Never mix by hand."],
          ],
        },
        {
          en: "Know before you install", zh: "产品上墙前需知",
          rules: [
            ["Expect slight batch colour variation", "Soft stone is made from modified mineral powder, so production batches can differ by 1–3 shades. Keep each batch to its own wall area so no single wall shows a visible change."],
            ["Allow for size tolerance", "Pressed sheets move slightly: ±2 mm for 2–5 mm thick products and ±10 mm for 5–20 mm. Plan the layout first, trim as needed, and lay in a running-bond (T-joint) or staggered pattern."],
            ["Leave a 2 mm joint", "Soft stone breathes and expands and contracts a little, so tight seamless butt joints aren't recommended. Leave a 2 mm blade-cut joint, or fill joints with colour-matched grout, for a neater and longer-lasting finish."],
          ],
        },
      ],
    },
    {
      id: "install",
      label: "Installation steps",
      groups: [
        {
          en: "Installation process", zh: "施工流程",
          steps: [
            ["process-1", "Check the substrate", "基层验收", "Make sure the wall is clean, flat and free of hollow spots."],
            ["process-2", "Snap setting-out lines", "弹线定位", "Mark the layout on the wall with a chalk line."],
            ["process-3", "Measure and mark", "测量标注", "Measure the wall and mark the cutting positions on the sheet."],
            ["process-4", "Cut to size", "切割", "Cut the sheet with a table saw or a handheld cutter."],
            ["process-5", "Trim the edges", "修边", "Smooth any rough edges with an angle grinder."],
            ["process-6", "Apply adhesive", "墙面刮浆", "Trowel adhesive onto the wall behind the sheet, covering at least 90% of the area."],
            ["process-7", "Fix the sheet", "上墙粘贴", "With 2–3 people, line the sheet up with the skirting at the bottom and press it on, working upward."],
            ["process-8", "Tamp it flat", "拍板压实", "Bed the sheet with a flat tamping board. Never press it with your hands."],
            ["process-9", "Nail the top edge", "顶端打钉", "Fire nails along the top edge with a nail gun so the sheet can't slide. Never nail the middle or bottom, which can make the surface bulge."],
            ["process-10", "Fill the nail holes", "填补钉孔", "Fill the nail holes with colour-matched filler."],
            ["process-11", "Cut the joints", "划刀片缝", "Score natural blade-cut joints between sheets. If the substrate shows through, touch up the edges with a fine brush and matching acrylic paint."],
            ["process-12", "Clean down", "海绵清洁", "Finish by cleaning the surface with a dry sponge."],
          ],
        },
      ],
    },
    {
      id: "details",
      label: "Joints & corners",
      groups: [
        {
          en: "Colour-matched joints", zh: "同色缝处理",
          steps: [
            ["joints-1", "Tint the grout", "调配同色填缝剂", "Mix pigment into the grout until it matches the sheet colour."],
            ["joints-2", "Mask the joints", "粘贴美纹纸", "Tape both sides of each joint with masking tape. Not needed for textured, uneven products."],
            ["joints-3", "Fill the joints", "填缝", "Fill the joints evenly with the tinted grout."],
            ["joints-4", "Strike the joints", "勾缝", "Run a jointing tool along each joint to form deep, full, recessed lines."],
            ["joints-5", "Peel the tape", "撕掉美纹纸", "Remove the masking tape when the grout is half dry."],
            ["joints-6", "Wipe clean", "擦拭浮尘", "Wipe away surface dust with a dry sponge."],
          ],
        },
        {
          en: "45° external corners", zh: "45°阳角处理",
          steps: [
            ["corner-1", "Bevel the edges", "修边至45°", "Grind the meeting edges of both sheets to 45° with an angle grinder."],
            ["corner-2", "Fill the corner", "涂满粘结剂", "Run colour-matched adhesive along the 45° corner so there is no gap between the sheet and the substrate."],
            ["corner-3", "Press it in", "压板挤浆", "After fixing, press with a board so the adhesive squeezes out and fills the corner joint."],
            ["corner-4", "Scrape off the excess", "铲除溢浆", "When it is half set, scrape off the excess with a small spatula."],
            ["corner-5", "Sand the corner", "打磨", "Sand the corner with a grinding disc for a crisp, even edge."],
            ["corner-6", "Wipe clean", "擦拭表面", "Wipe the surface with a dry sponge."],
          ],
        },
      ],
    },
    {
      id: "finish",
      label: "Finishing & care",
      groups: [
        {
          en: "Protecting the finished wall", zh: "成品保护",
          steps: [
            ["protect-1", "Fit corner guards", "安装护角条", "Fit corner guards on edges, corners and anywhere likely to be knocked, and hold them in place with masking tape."],
            ["protect-2", "Apply protective film", "粘贴保护膜", "Run masking-tape protective film along the edge of the wall and unroll it over the surface."],
            ["protect-3", "Fully protected", "成品保护完成", "The wall is ready for other trades to continue working around it."],
          ],
          note: "Paint is hard to remove from the surface, so always protect the finished wall before painting or other work starts nearby.",
        },
        {
          en: "Key rules", zh: "施工注意事项",
          rules: [
            ["Cover 90% of the back with adhesive", "Never use structural adhesive."],
            ["Tamp with a flat board", "Never press with your hands, or the finished surface will be uneven."],
            ["Nail only along the top edge", "Nails in the middle or bottom can make the surface bulge."],
            ["Protect the finished work", "Use masking tape, protective film and corner guards once installation is complete."],
          ],
        },
        {
          en: "Common mistakes", zh: "施工错误示范",
          mistakes: [
            [["mistake-1", "mistake-2"], "Grouting without masking", "填缝错误", "Pressing grout straight into the joints with a putty knife or float, without masking tape or a grout bag, leaves residue on the wall and spoils the finish."],
            [["mistake-3", "mistake-4"], "Patchy adhesive", "刮浆错误", "Leaving the edges and corners of the back without adhesive makes the finished wall uneven."],
          ],
        },
      ],
    },
  ],
};
