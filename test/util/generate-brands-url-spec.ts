import { assert } from "chai";
import { brandsUrl } from "../../src/util/brands-url";

describe("Generate brands Url", () => {
  it("Generate logo brands url for cloud component without fallback", () => {
    assert.strictEqual(
      // @ts-ignore
      brandsUrl({ domain: "cloud", type: "logo" }),
      "https://rpcontrol.io/cloud/logo.png"
    );
  });
  it("Generate icon brands url for cloud component without fallback", () => {
    assert.strictEqual(
      // @ts-ignore
      brandsUrl({ domain: "cloud", type: "icon" }),
      "https://rpcontrol.io/cloud/icon.png"
    );
  });
  it("Generate logo brands url for cloud component with fallback", () => {
    assert.strictEqual(
      // @ts-ignore
      brandsUrl({ domain: "cloud", type: "logo", useFallback: true }),
      "https://rpcontrol.io/_/cloud/logo.png"
    );
  });
  it("Generate icon brands url for cloud component with fallback", () => {
    assert.strictEqual(
      // @ts-ignore
      brandsUrl({ domain: "cloud", type: "icon", useFallback: true }),
      "https://rpcontrol.io/_/cloud/icon.png"
    );
  });

  it("Generate dark theme optimized logo brands url for cloud component without fallback", () => {
    assert.strictEqual(
      // @ts-ignore
      brandsUrl({ domain: "cloud", type: "logo", darkOptimized: true }),
      "https://rpcontrol.io/cloud/dark_logo.png"
    );
  });
});
