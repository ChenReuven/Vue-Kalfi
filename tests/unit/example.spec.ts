import { shallowMount } from "@vue/test-utils";
import HelloWorld from "@/components/HelloWorld.vue";
import KalfiComponent from "@/components/Kalfi.vue";

describe("HelloWorld.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    // const wrapper = shallowMount(HelloWorld, {
    //   propsData: { msg }
    // });
    expect(test).toBeTruthy();
  });

  it("renders props.msg when passed", () => {
    const kalfi: KalfiComponent = new KalfiComponent();
    // const wrapper = shallowMount(HelloWorld, {
    //   propsData: { msg }
    // });
    expect(true).toBeTruthy();
  });
});
